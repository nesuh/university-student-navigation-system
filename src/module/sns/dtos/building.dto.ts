import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID, IsEnum, IsDecimal, IsNumber } from 'class-validator';
import { BuildingType } from 'src/shared/enums';

export class CreateBuildingDto {
  @ApiProperty({ description: 'Name of the building' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ 
    description: 'Building type', 
    enum: BuildingType, 
    enumName: 'BuildingType' 
  })
  @IsEnum(BuildingType)
  type: BuildingType;

  @ApiProperty({ description: 'Latitude of the building' })
  @IsDecimal()
  latitude: number;

  @ApiProperty({ description: 'Longitude of the building' })
  @IsDecimal()
  longitude: number;

  @ApiProperty({ description: 'Description of the building' })
  @IsNotEmpty()
  @IsString()
  description: string;

}

export class UpdateBuildingDto extends CreateBuildingDto {
  @ApiProperty({ description: 'ID of the building' })
  @IsNumber()
  id: number;
}
