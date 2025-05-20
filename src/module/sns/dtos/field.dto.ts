import { ApiProperty } from '@nestjs/swagger';
import {IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateFieldsDto {
    @ApiProperty({ description: 'Name of the filed included in department like these in Software Engineering Department "Artificial Intelligence", "Cyber Security", "Finance"' })
    @IsString()
    name: string;
  
    @ApiProperty({ description: 'ID of the department Id' })
    @IsNumber()
    departmentId:number
}

export class UpdateFieldsDto extends CreateFieldsDto {
  @ApiProperty({ description: 'ID of the field' })
  @IsNumber()
  id: number;
}
