import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID, IsEnum } from 'class-validator';
import { RoomType } from 'src/shared/enums'; 

export class CreateRoomDto {
  @ApiProperty({ description: 'Name of the room' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Floor number of the room' })
  @IsNotEmpty()
  @IsString()
  floorNumber: string;

  @ApiProperty({ description: 'Type of the room', enum: RoomType })
  @IsEnum(RoomType)
  roomType: RoomType;

  @ApiProperty({ description: 'ID of the building the room is in' })
  @IsUUID()
  buildingId: string;
}

export class UpdateRoomDto extends CreateRoomDto {
  @ApiProperty({ description: 'ID of the room' })
  @IsUUID()
  id: string;
}
