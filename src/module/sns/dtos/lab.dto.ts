import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsString } from 'class-validator';
export class CreateLabDto {
  @ApiProperty({ description: 'Name of the lab' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Head of the lab' })
  @IsUUID()
  headOfLabId: string;

  @ApiProperty({ description: 'Building the lab is located in' })
  @IsUUID()
  buildingId: string;

  @ApiProperty({ description: 'Room where the lab is located' })
  @IsUUID()
  roomId: string;

  @ApiProperty({ description: 'Operational time of the lab' })
  operationalTime: {
    open: string;
    closing: string;
  };
}

export class UpdateLabDto extends CreateLabDto {
  @ApiProperty({ description: 'ID of the lab' })
  @IsUUID()
  id: string;
}
