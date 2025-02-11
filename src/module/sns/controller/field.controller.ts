import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateFieldsDto, UpdateFieldsDto } from '../dtos';
import { FieldService } from '../service/field.service';
import { Field } from 'src/db/entities';

const options: ExtraCrudOptions = {
  entityIdName: 'fieldId',
  createDto: CreateFieldsDto,
  updateDto: UpdateFieldsDto,
};

@Controller('field')
@ApiTags('Field')
export class FieldController extends TExtraCrudController<Field>(options) {
  constructor(private readonly fieldService: FieldService) {
    super(fieldService);
  }

  @Post()
  async registerField(@Body() body: CreateFieldsDto) {
    return await this.fieldService.registerField(body);
  }
}
