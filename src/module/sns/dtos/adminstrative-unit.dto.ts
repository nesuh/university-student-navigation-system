import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { AdministrativeUnitEnum } from 'src/shared/enums/adminstrative-unit.enum';

export class CreateAdminstrativeUnitDto {
  @ApiProperty({
    description: 'Name of the Administrative Unit',
    enum: AdministrativeUnitEnum,
  })
  @IsEnum(AdministrativeUnitEnum)
  name: AdministrativeUnitEnum;

}
export class UpdateAdminstrativeUnitDto extends CreateAdminstrativeUnitDto {
  @ApiProperty({ description: 'ID of the Adminstratveunit' })
  @IsNumber()
  id: number;
}
