import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Dormitory } from 'src/db/entities';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { DormitoryService } from '../service/dormitory.service';
import { CreateDormitoryDto, UpdateDormitoryDto } from '../dtos';

const options: ExtraCrudOptions = {
  createDto: CreateDormitoryDto,
  updateDto: UpdateDormitoryDto,
};

@Controller('dormitory')
@ApiTags('Dormitory')
export class DormitoryController extends TEntityCrudController<Dormitory>(
  options,
) {
  constructor(private readonly dormitoryService: DormitoryService) {
    super(dormitoryService);
  }
}
