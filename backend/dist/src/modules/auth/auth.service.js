"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const existingOrg = await this.prisma.organization.findUnique({
            where: { email: dto.organizationEmail },
        });
        if (existingOrg) {
            throw new common_1.ConflictException('Organization with this email already exists');
        }
        const agentExists = await this.prisma.agent.findFirst({
            where: { email: dto.agentEmail },
        });
        if (agentExists) {
            throw new common_1.ConflictException('Agent with this email already exists');
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
    async login(dto) {
        const agent = await this.prisma.agent.findFirst({
            where: { email: dto.email },
            include: { organization: true },
        });
        if (!agent || !(await bcrypt.compare(dto.password, agent.passwordHash))) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const payload = {
            sub: agent.id,
            email: agent.email,
            organizationId: agent.organizationId,
            role: agent.role,
        };
        const accessExpiresIn = 900;
        const accessToken = this.jwtService.sign({ ...payload }, {
            secret: process.env.JWT_ACCESS_SECRET ?? 'access-secret',
            expiresIn: accessExpiresIn,
        });
        const refreshExpiresIn = 7 * 24 * 60 * 60;
        const refreshToken = this.jwtService.sign({ ...payload, type: 'refresh' }, {
            secret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
            expiresIn: refreshExpiresIn,
        });
        const decoded = this.jwtService.decode(accessToken);
        const expiresIn = decoded?.exp != null
            ? Math.max(0, Math.floor(decoded.exp - Date.now() / 1000))
            : accessExpiresIn;
        return {
            accessToken,
            refreshToken,
            expiresIn,
        };
    }
    async validateAgent(id) {
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map