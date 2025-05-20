import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateCollegeDto {
  @ApiProperty({ description: 'Name of the college' })
  @IsNotEmpty()
  @IsString()
  name: string ;

  @ApiProperty({ description: 'ID of the science type this college belongs to' })
  @IsNumber()
  scienceTypeId: number;
}

export class UpdateCollegeDto extends CreateCollegeDto {
  @ApiProperty({ description: 'ID of the college' })
  @IsNumber()
  id: number;
}
