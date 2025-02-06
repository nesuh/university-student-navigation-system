import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
} from 'class-validator';
import { CafeteriaType } from 'src/shared/enums/cafeteria_type.enum';

export class CreateCafeteriaDto {
  @ApiProperty({ description: 'Name of the cafeteria' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Type of the cafeteria', enum: CafeteriaType })
  @IsEnum(CafeteriaType)
  type: CafeteriaType;

  @ApiProperty({ description: 'Capacity of the cafeteria' })
  @IsNumber()
  capacity: number;

  @ApiProperty({ description: 'ID of the head of the cafeteria' })
  @IsUUID()
  headOfCafeteriaId: string;

  @ApiProperty({
    description: 'ID of the building the cafeteria is located in',
  })
  @IsUUID()
  buildingId: string;

  @ApiProperty({ description: 'ID of the room where the cafeteria is located' })
  @IsUUID()
  roomId: string;

  @ApiProperty({
    description: 'Operational times for the cafeteria',
    type: Object,
  })
  @IsObject()
  operationalTime: {
    morning: { open: Date; closing: Date };
    afternoon: { open: Date; closing: Date };
    night: { open: Date; closing: Date };
  };
}
export class UpdateCafeteriaDto extends CreateCafeteriaDto {
  @ApiProperty({ description: 'ID of the cafeteria' })
  @IsUUID()
  id: string;

  // Optional fields for update scenarios
  @ApiProperty({
    description: 'Updated name of the cafeteria',
    required: false,
  })
  @IsOptional()
  name!: string;

  @ApiProperty({
    description: 'Updated type of the cafeteria',
    required: false,
  })
  @IsOptional()
  type!: CafeteriaType;

  @ApiProperty({
    description: 'Updated capacity of the cafeteria',
    required: false,
  })
  @IsOptional()
  capacity!: number;

  @ApiProperty({
    description: 'Updated operational times for the cafeteria',
    required: false,
    type: Object,
  })
  @IsOptional()
  operationalTime!: {
    morning: { open: Date; closing: Date };
    afternoon: { open: Date; closing: Date };
    night: { open: Date; closing: Date };
  };
}
