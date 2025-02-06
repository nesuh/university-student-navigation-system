import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Lab } from 'src/db/entities';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateLabDto, UpdateLabDto } from '../dtos';
import { labService } from '../service/lab.service';

const options: ExtraCrudOptions = {
  createDto: CreateLabDto,
  updateDto: UpdateLabDto,
};

@Controller('lab')
@ApiTags('Lab')
export class LabController extends TEntityCrudController<Lab>(options) {
  constructor(private readonly labService: labService) {
    super(labService);
  }
}
