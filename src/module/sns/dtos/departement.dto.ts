import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ description: 'Name of the department' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'ID of the building where the department is located',
  })
  @IsUUID()
  buildingId: string;


  @ApiProperty({ description: 'Faculty ID to which the department belongs' })
  @IsUUID()
  facultyId: string;
}

export class UpdateDepartmentDto extends CreateDepartmentDto {
  @ApiProperty({ description: 'ID of the department' })
  @IsUUID()
  id: string;
}
