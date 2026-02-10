import { JwtService } from '@nestjs/jwt';
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
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        message: string;
        organizationId: string;
    }>;
    login(dto: LoginDto): Promise<AuthTokens>;
    validateAgent(id: string): Promise<{
        id: string;
        email: string;
        organizationId: string;
        displayName: string | null;
        role: string;
    } | null>;
}
