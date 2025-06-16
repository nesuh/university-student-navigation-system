
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
export class CreateLibraryDto {
  @ApiProperty({ description: 'Name of the lab' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Head of the lab' })
  @IsString()
  headOfLibrary: string;

  @ApiProperty({ description: 'Capacity of Library'})
  @IsNotEmpty()
  @IsNumber()
  capacity: number;

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
export class UpdateLibraryDto extends CreateLibraryDto {
  @ApiProperty({ description: 'ID of the lab' })
  @IsNumber()
  id: number;
}
