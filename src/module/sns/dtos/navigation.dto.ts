import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateNavigationDto {
  @ApiProperty({ description: 'ID of the building the navigation starts from' })
  @IsUUID()
  fromBuildingId: string;

  @ApiProperty({ description: 'ID of the building the navigation goes to' })
  @IsUUID()
  toBuildingId: string;

  @ApiProperty({ description: 'Distance between buildings in meters' })
  @IsNotEmpty()
  @IsNumber()
  distanceMeters: number;

  @ApiProperty({ description: 'Path coordinates for the navigation' })
  @IsOptional()
  @IsString()
  pathCoordinates?: string; // Assuming it's a string, you can modify as needed
}

export class UpdateNavigationDto extends CreateNavigationDto {
  @ApiProperty({ description: 'ID of the navigation record' })
  @IsUUID()
  id: string;
}
