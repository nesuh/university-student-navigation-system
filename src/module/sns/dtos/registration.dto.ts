import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

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

  @ApiProperty({ description: 'floor Number of registration' })
  @IsNotEmpty()
  @IsNumber()
  floorNumber: number;
  
  @ApiProperty({ description: 'room Number of registration' })
  @IsNotEmpty()
  @IsNumber()
  roomNumber: number;

  @ApiProperty({
    description: 'ID of the building the registration is associated with',
  })
  @IsUUID()
  buildingId: string;

  @ApiProperty({
    description: 'Faculty Id',
  })
  @IsUUID()
  facultyId: string;

  @ApiProperty({
    description: 'Science Type Id',
  })
  @IsUUID()
  scienceTypeId: string;

  @ApiProperty({
    description: 'Department Id',
  })
  @IsUUID()
  departmentId: string;
}

export class UpdateRegistrationDto extends CreateRegistrationDto {
  @ApiProperty({ description: 'ID of the registration' })
  @IsUUID()
  id: string;
}
