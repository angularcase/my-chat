import { IsString, MinLength } from 'class-validator';

export class UnregisterDeviceDto {
  @IsString()
  @MinLength(1)
  token: string;
}
