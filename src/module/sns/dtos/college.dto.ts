import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { collegesEnum } from 'src/shared/enums';

export class CreateCollegeDto {
  @ApiProperty({ 
     description: 'Name of College', 
     enum: collegesEnum, 
     enumName: 'CollegeEnum'  })
  @IsEnum(collegesEnum)
  name: collegesEnum;

  @ApiProperty({ description: 'ID of the science type this college belongs to' })
  @IsNumber()
  scienceTypeId: number;
}

export class UpdateCollegeDto extends CreateCollegeDto {
  @ApiProperty({ description: 'ID of the college' })
  @IsNumber()
  id: number;
}
