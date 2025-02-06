import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsUUID } from 'class-validator';
import { FieldType } from 'src/shared/enums/field-type.enum';

export class CreateFieldsDto {
  @ApiProperty({ description: 'Field name', enum: FieldType })
  @IsEnum(FieldType)
  name: FieldType;
}

export class UpdateFieldsDto extends CreateFieldsDto {
  @ApiProperty({ description: 'ID of the field' })
  @IsUUID()
  id: string;
}
