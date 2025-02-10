import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateHallDto {
  @ApiProperty({ description: 'Name of the hall' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Building the hall is located in' })
  @IsUUID()
  buildingId: string;

  @ApiProperty({ description: 'Capacity of the hall' })
  @IsNumber()
  capacity: number;

  @ApiProperty({ description: 'Description of the hall It is Optional' })
  @IsString()
  @IsOptional()
  description: string;
}

export class UpdateHallDto extends CreateHallDto {
  @ApiProperty({ description: 'ID of the hall' })
  @IsUUID()
  id: string;
}
