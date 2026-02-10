import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  organizationName: string;

  @IsEmail()
  organizationEmail: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  organizationPassword: string;

  @IsEmail()
  agentEmail: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  agentPassword: string;

  @IsOptional()
  @IsString()
  agentDisplayName?: string;
}
