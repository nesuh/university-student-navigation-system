import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateRegistrationDto {
  @ApiProperty({ description: 'Name of the registration' })
  @IsNotEmpty()
  @IsString()
  name: string;

  
  @ApiProperty({ description: 'email of registration' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ description: 'Phone Number of registration' })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    description: 'ID of the building the registration is associated with',
  })
  @IsUUID()
  buildingId: string;

  @ApiProperty({ description: 'Operational time of the registration' })
  @IsNotEmpty()
  operationalTime: {    morning: {
    opening: string;
    closing: string;
  },
  afternoon: {
    opening: string;
    closing: string;
  } };

  @ApiProperty({
    description: 'Registrar or HeadOfDepartment  of the field associated with the registration',
  })
  @IsString()
 role:string
}

export class UpdateRegistrationDto extends CreateRegistrationDto {
  @ApiProperty({ description: 'ID of the registration' })
  @IsUUID()
  id: string;
}
