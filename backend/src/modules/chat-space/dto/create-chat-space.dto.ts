import { IsArray, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateChatSpaceDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allowedDomains?: string[];
}
