import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Hall } from 'src/db/entities';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateFieldsDto, UpdateFieldsDto } from '../dtos';
import { HallService } from '../service/hall.service';

const options: ExtraCrudOptions = {
  createDto: CreateFieldsDto,
  updateDto: UpdateFieldsDto,
};

@Controller('hall')
@ApiTags('Hall')
export class HallController extends TEntityCrudController<Hall>(options) {
  constructor(private readonly hallService: HallService) {
    super(hallService);
  }
}
