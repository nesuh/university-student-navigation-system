import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateBuildingDto {
  @ApiProperty({ description: 'Name of the building' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The address of the building' })
  @IsOptional()
  @IsString()
  address?: string;
}

export class UpdateBuildingDto extends CreateBuildingDto {
  @ApiProperty({ description: 'ID of the building' })
  @IsUUID()
  id: string;
}
