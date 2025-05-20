import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateFacultyDto {
  @ApiProperty({ description: 'Name of the faculty' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'ID of the science Type Id' })
  @IsNumber()
  scienceTypeId:number

}
export class UpdateFacultyDto extends CreateFacultyDto {
  @ApiProperty({ description: 'ID of the faculty' })
  @IsNumber()
  id: number;
}
