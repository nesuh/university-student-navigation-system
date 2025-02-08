import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { ScienceType } from 'src/db/entities';
import { ScienceTypeService } from '../service/science-type.service';
import { CreateScienceTypeDto, UpdateScienceTypeDto } from '../dtos';

const options: ExtraCrudOptions = {
  createDto: CreateScienceTypeDto,
  updateDto: UpdateScienceTypeDto,
};

@Controller('science-type')
@ApiTags('Science-Type')
export class ScienceTypeController extends TEntityCrudController<ScienceType>(options) {
  constructor(private readonly scienceTypeService: ScienceTypeService) {
    super(scienceTypeService);
  }
}
