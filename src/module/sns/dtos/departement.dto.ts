import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ description: 'Name of the department' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'College ID to which the department belongs' })
  @IsNumber()
  collegeId: number;
}

export class UpdateDepartmentDto extends CreateDepartmentDto {
  @ApiProperty({ description: 'ID of the department' })
  @IsNumber()
  id: number;
}
