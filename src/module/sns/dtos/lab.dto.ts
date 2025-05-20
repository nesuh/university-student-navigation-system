
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsString, IsNumber } from 'class-validator';

class TimeSlot {
  @ApiProperty({ description: 'Opening time' })
  @IsNotEmpty()
  @IsString()
  opening: string;

  @ApiProperty({ description: 'Closing time' })
  @IsNotEmpty()
  @IsString()
  closing: string;
}
export class CreateLabDto {
  @ApiProperty({ description: 'Name of the lab' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Head of the lab' })
  @IsString()
  headOfLab: string;

  @ApiProperty({ description: 'Floor Number of the lab' })
  @IsNotEmpty()
  @IsNumber()
  floorNumber: number;

  @ApiProperty({ description: 'Room Number of the lab' })
  @IsNotEmpty()
  @IsNumber()
  roomNumber:number

  @ApiProperty({ description: 'Building the lab is located in' })
  @IsNumber()
  buildingId: number;

  @ApiProperty({ description: 'Operational time of the lab' })
  operationalTime: {
    morning: TimeSlot;
    afternoon: TimeSlot;
    night: TimeSlot;
  };
}
export class UpdateLabDto extends CreateLabDto {
  @ApiProperty({ description: 'ID of the lab' })
  @IsNumber()
  id: number;
}
