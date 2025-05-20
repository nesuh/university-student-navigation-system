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
  @IsNumber()
  buildingId: number;

  @ApiProperty({
    description: 'Faculty Id',
  })
  @IsNumber()
  facultyId: number;

  @ApiProperty({
    description: 'Science Type Id',
  })
  @IsNumber()
  scienceTypeId: number;

  @ApiProperty({
    description: 'Department Id',
  })
 @IsNumber()
  departmentId: number;
}

export class UpdateRegistrationDto extends CreateRegistrationDto {
  @ApiProperty({ description: 'ID of the registration' })
  @IsNumber()
  id: number;
}
