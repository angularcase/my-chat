import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

export type JwtPayload = {
  sub: string;
  email: string;
  organizationId: string;
  role: string;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingOrg = await this.prisma.organization.findUnique({
      where: { email: dto.organizationEmail },
    });
    if (existingOrg) {
      throw new ConflictException('Organization with this email already exists');
    }

    const agentExists = await this.prisma.agent.findFirst({
      where: { email: dto.agentEmail },
    });
    if (agentExists) {
      throw new ConflictException('Agent with this email already exists');
    }

    const orgPasswordHash = await bcrypt.hash(dto.organizationPassword, 10);
    const agentPasswordHash = await bcrypt.hash(dto.agentPassword, 10);

    const org = await this.prisma.organization.create({
      data: {
        name: dto.organizationName,
        email: dto.organizationEmail,
        passwordHash: orgPasswordHash,
      },
    });

    await this.prisma.agent.create({
      data: {
        organizationId: org.id,
        email: dto.agentEmail,
        passwordHash: agentPasswordHash,
        displayName: dto.agentDisplayName ?? dto.agentEmail.split('@')[0],
        role: 'admin',
      },
    });

    return {
      message: 'Organization and admin agent created. Use POST /auth/login to get tokens.',
      organizationId: org.id,
    };
  }

  async login(dto: LoginDto): Promise<AuthTokens> {
    const agent = await this.prisma.agent.findFirst({
      where: { email: dto.email },
      include: { organization: true },
    });

    if (!agent || !(await bcrypt.compare(dto.password, agent.passwordHash))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload: JwtPayload = {
      sub: agent.id,
      email: agent.email,
      organizationId: agent.organizationId,
      role: agent.role,
    };

    const accessExpiresIn = 900; // 15 min
    const accessToken = this.jwtService.sign(
      { ...payload },
      {
        secret: process.env.JWT_ACCESS_SECRET ?? 'access-secret',
        expiresIn: accessExpiresIn,
      },
    );

    const refreshExpiresIn = 7 * 24 * 60 * 60; // 7 days
    const refreshToken = this.jwtService.sign(
      { ...payload, type: 'refresh' },
      {
        secret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
        expiresIn: refreshExpiresIn,
      },
    );

    const decoded = this.jwtService.decode(accessToken) as { exp?: number };
    const expiresIn =
      decoded?.exp != null
        ? Math.max(0, Math.floor(decoded.exp - Date.now() / 1000))
        : accessExpiresIn;

    return {
      accessToken,
      refreshToken,
      expiresIn,
    };
  }

  async refresh(refreshToken: string): Promise<AuthTokens> {
    let payload: JwtPayload & { type?: string };
    try {
      payload = this.jwtService.verify<JwtPayload & { type: string }>(
        refreshToken,
        {
          secret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
        },
      );
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
    if (payload?.type !== 'refresh') {
      throw new UnauthorizedException('Invalid refresh token');
    }
    const agent = await this.prisma.agent.findUnique({
      where: { id: payload.sub },
      include: { organization: true },
    });
    if (!agent) {
      throw new UnauthorizedException('Agent not found');
    }
    const newPayload: JwtPayload = {
      sub: agent.id,
      email: agent.email,
      organizationId: agent.organizationId,
      role: agent.role,
    };
    const accessExpiresIn = 900;
    const accessToken = this.jwtService.sign(newPayload, {
      secret: process.env.JWT_ACCESS_SECRET ?? 'access-secret',
      expiresIn: accessExpiresIn,
    });
    const refreshExpiresIn = 7 * 24 * 60 * 60;
    const newRefreshToken = this.jwtService.sign(
      { ...newPayload, type: 'refresh' },
      {
        secret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
        expiresIn: refreshExpiresIn,
      },
    );
    const decoded = this.jwtService.decode(accessToken) as { exp?: number };
    const expiresIn =
      decoded?.exp != null
        ? Math.max(0, Math.floor(decoded.exp - Date.now() / 1000))
        : accessExpiresIn;
    return {
      accessToken,
      refreshToken: newRefreshToken,
      expiresIn,
    };
  }

  async validateAgent(id: string) {
    const agent = await this.prisma.agent.findUnique({
      where: { id },
      select: {
        id: true,
        organizationId: true,
        email: true,
        displayName: true,
        role: true,
      },
    });
    return agent ?? null;
  }
}
