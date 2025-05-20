import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsEnum, IsUUID } from 'class-validator';
import { GenderType } from 'src/shared/enums';
import { DormitoryType } from 'src/shared/enums/dormitory-type.enum';

export class CreateDormitoryDto {
  @ApiProperty({ description: 'Gender of the dormitory', enum: GenderType })
  @IsEnum(GenderType)
  gender: GenderType;

  @ApiProperty({ description: 'Dormitory type  SpecialNeedPerson OR NonSpecialNeedPerson ', enum: DormitoryType })
  @IsEnum(DormitoryType)
  dormitory_type: DormitoryType;

  @ApiProperty({ description: 'Number of students' })
  @IsNumber()
  number_of_student: number;

  @ApiProperty({ description: 'Number of rooms' })
  @IsNumber()
  number_of_room: number;
  
  @ApiProperty({ description: 'building Id of rooms' })
  @IsNumber()
  buildingId: number;
}

export class UpdateDormitoryDto extends CreateDormitoryDto {
  @ApiProperty({ description: 'ID of the dormitory' })
  @IsNumber()
  id: number;
}
