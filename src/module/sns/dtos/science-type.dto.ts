import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateScienceTypeDto {
  @ApiProperty({ description: 'Name of the science type  //Natural Science or Social Science' })
  @IsString()
  ScienceTypeName: string;
}

export class UpdateScienceTypeDto extends CreateScienceTypeDto {
  @ApiProperty({ description: 'ID of the science type' })
  @IsUUID()
  id: string;

}
