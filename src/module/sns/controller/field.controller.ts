import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateFieldsDto, UpdateFieldsDto } from '../dtos';
import { FieldService } from '../service/field.service';
import { Field } from 'src/db/entities';

const options: ExtraCrudOptions = {
  createDto: CreateFieldsDto,
  updateDto: UpdateFieldsDto,
};

@Controller('field')
@ApiTags('Field')
export class FieldController extends TEntityCrudController<Field>(options) {
  constructor(private readonly fieldService: FieldService) {
    super(fieldService);
  }
}
