import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateRegistrationDto {
  @ApiProperty({ description: 'Name of the registration' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'ID of the building the registration is associated with',
  })
  @IsUUID()
  buildingId: string;

  @ApiProperty({ description: 'Operational time of the registration' })
  @IsNotEmpty()
  operationalTime: { open: string; closing: string };

  @ApiProperty({ description: 'Type of registration' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({
    description: 'ID of the field associated with the registration',
  })
  @IsUUID()
  fieldId: string;
}

export class UpdateRegistrationDto extends CreateRegistrationDto {
  @ApiProperty({ description: 'ID of the registration' })
  @IsUUID()
  id: string;
}
