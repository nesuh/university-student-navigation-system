import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cafeteria } from 'src/db/entities';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { CafeteriaService } from '../service/cafeteria.service';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateCafeteriaDto, UpdateCafeteriaDto } from '../dtos';

const options: ExtraCrudOptions = {
  entityIdName: 'cafeteriaId',
  createDto: CreateCafeteriaDto,
  updateDto: UpdateCafeteriaDto,
};

@Controller('cafeteria')
@ApiTags('Cafeteria')
export class CafeteriaController extends TExtraCrudController<Cafeteria>(
  options,
) {
  constructor(private readonly cafeteriaService: CafeteriaService) {
    super(cafeteriaService);
  }
}
