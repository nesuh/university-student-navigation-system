import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, IsEnum, IsUUID } from 'class-validator';
import { UserRole } from 'src/shared/enums';

export class CreateUserDto {
  @ApiProperty({ description: 'Name of the Admin' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email of the Admin' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Password for the Admin' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ description: 'phoneNumber for the Admin' })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    description: 'Role of the Admin',
    enum: UserRole,
    default: UserRole.Admin,
  })
  @IsEnum(UserRole)
  role: UserRole;
}

export class UpdateUserDto {
  @ApiProperty({ description: 'ID of the user' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Name of the user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Email of the user' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Password for the user' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Role of the user',
    enum: UserRole,
    default: UserRole.User,
  })
  @IsEnum(UserRole)
  role: UserRole;
}
