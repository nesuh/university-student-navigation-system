import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsNumber,
  IsEnum,
  IsOptional,
} from 'class-validator'; // Adjust the import based on your file structure
import { RoomType } from 'src/shared/enums';

export class CreateClassDto {
  @ApiProperty({ description: 'Name of the class' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'ID of the building the class is located in' })
  @IsUUID()
  buildingId: string;

  @ApiProperty({ description: 'Floor number where the class is located' })
  @IsNumber()
  floorNumber: number;

  @ApiProperty({ description: 'Room type of the class', enum: RoomType })
  @IsEnum(RoomType)
  roomType: RoomType;
}
export class UpdateClassDto extends CreateClassDto {
  @ApiProperty({ description: 'ID of the class', required: true })
  @IsUUID()
  id: string;

  // Optional fields for update scenarios
  @ApiProperty({ description: 'Updated name of the class', required: false })
  @IsOptional()
  @IsString()
  name!: string;

  @ApiProperty({ description: 'Updated building ID', required: false })
  @IsOptional()
  @IsUUID()
  buildingId!: string;

  @ApiProperty({ description: 'Updated floor number', required: false })
  @IsOptional()
  @IsNumber()
  floorNumber!: number;

  @ApiProperty({ description: 'Updated room type', required: false })
  @IsOptional()
  @IsEnum(RoomType)
  roomType!: RoomType;
}
