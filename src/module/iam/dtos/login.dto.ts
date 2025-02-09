import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, IsEnum, IsUUID } from 'class-validator';

export class CreateLoginDto {
  @ApiProperty({ description: 'Name of the user' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ description: 'Password for the user' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UpdateLoginDto {
  @ApiProperty({ description: 'ID of the user' })
  @IsUUID()
  id: string;

}
