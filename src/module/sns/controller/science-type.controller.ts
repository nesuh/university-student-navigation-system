import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateFieldsDto, UpdateFieldsDto } from '../dtos';
import { ScienceType } from 'src/db/entities';
import { ScienceTypeService } from '../service/science-type.service';

const options: ExtraCrudOptions = {
  createDto: CreateFieldsDto,
  updateDto: UpdateFieldsDto,
};

@Controller('science-type')
@ApiTags('Science-Type')
export class ScienceTypeController extends TEntityCrudController<ScienceType>(options) {
  constructor(private readonly scienceTypeService: ScienceTypeService) {
    super(scienceTypeService);
  }
}
