import { IsArray, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateChatSpaceDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  name?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allowedDomains?: string[];
}
