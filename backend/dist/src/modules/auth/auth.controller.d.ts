import { AuthService, AuthTokens } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
        organizationId: string;
    }>;
    login(dto: LoginDto): Promise<AuthTokens>;
    refresh(dto: RefreshDto): Promise<AuthTokens>;
}
