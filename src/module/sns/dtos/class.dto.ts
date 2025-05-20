import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsNumber,
  IsEnum,
  IsOptional,
  isNumber,
} from 'class-validator'; // Adjust the import based on your file structure

export class CreateClassDto {
  @ApiProperty({ description: 'Name of the class' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'ID of the building the class is located in' })
  @IsNumber()
  buildingId: number;

  @ApiProperty({ description: 'Floor number where the class is located' })
  @IsNumber()
  floorNumber: number;

  @ApiProperty({ description: 'Room number where the class is located' })
  @IsNumber()
  roomNumber: number;

  @ApiProperty({ description: 'Room Type of the class' })
  @IsNotEmpty()
  @IsString()
  roomType:string

}
export class UpdateClassDto extends CreateClassDto {
  @ApiProperty({ description: 'ID of the class', required: true })
  @IsNumber()
  id: number;

  // Optional fields for update scenarios
  @ApiProperty({ description: 'Updated name of the class', required: false })
  @IsOptional()
  @IsString()
  name!: string;

  @ApiProperty({ description: 'Updated building ID', required: false })
  @IsOptional()
  @IsNumber()
  buildingId!: number;

  @ApiProperty({ description: 'Updated floor number', required: false })
  @IsOptional()
  @IsNumber()
  floorNumber!: number;
}
