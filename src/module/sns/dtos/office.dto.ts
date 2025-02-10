import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsObject, IsString, IsUUID } from 'class-validator';

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
export class CreateOfficeDto {
  @ApiProperty({ description: 'Name of the office' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Phone number of the office' })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ description: 'Email of the office' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Building where the office is located' })
  @IsUUID()
  buildingId: string;

  @ApiProperty({description:'Floor Number of the office'})
  @IsNumber()
  @IsNotEmpty()
  floorNumber: number;

  @ApiProperty({ description: 'Room Number of the office' })
  @IsNumber()
  @IsNotEmpty()
  roomNumber: number;

   @ApiProperty({
      description: 'Operational times for the cafeteria',
      type: Object,
    })
    @IsObject()
    operationalTime: {
      morning: TimeSlot;
      afternoon: TimeSlot;
      night: TimeSlot;
    };
}

export class UpdateOfficeDto extends CreateOfficeDto {
  @ApiProperty({ description: 'ID of the office' })
  @IsUUID()
  id: string;
}
