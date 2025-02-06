import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateOfficeDto {
  @ApiProperty({ description: 'Building where the office is located' })
  @IsUUID()
  buildingId: string;
}

export class UpdateOfficeDto extends CreateOfficeDto {
  @ApiProperty({ description: 'ID of the office' })
  @IsUUID()
  id: string;
}
