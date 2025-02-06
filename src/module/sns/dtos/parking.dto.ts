import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateParkingDto {
  @ApiProperty({ description: 'Name of the parking' })
  @IsNotEmpty()
  @IsString()
  parkingName: string;

  @ApiProperty({ description: 'Capacity of the parking lot' })
  @IsNumber()
  capacity: number;
}

export class UpdateParkingDto extends CreateParkingDto {
  @ApiProperty({ description: 'ID of the parking' })
  @IsUUID()
  id: string;
}
