import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateFacultyDto {
  @ApiProperty({ description: 'Name of the faculty' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'ID of the science Type Id' })
  @IsUUID()
  scienceTypeId:string

}
export class UpdateFacultyDto extends CreateFacultyDto {
  @ApiProperty({ description: 'ID of the faculty' })
  @IsUUID()
  id: string;
}
