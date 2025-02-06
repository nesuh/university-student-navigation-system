import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsNumber, IsString } from 'class-validator';

export class CreateHallDto {
  @ApiProperty({ description: 'Name of the hall' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Head of the meeting room' })
  @IsUUID()
  headOfMeetingRoomId: string;

  @ApiProperty({ description: 'Building the hall is located in' })
  @IsUUID()
  buildingId: string;

  @ApiProperty({ description: 'Capacity of the hall' })
  @IsNumber()
  capacity: number;
}

export class UpdateHallDto extends CreateHallDto {
  @ApiProperty({ description: 'ID of the hall' })
  @IsUUID()
  id: string;
}
