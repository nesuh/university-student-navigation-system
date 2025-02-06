import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Classes } from 'src/db/entities';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateClassDto, UpdateClassDto } from '../dtos';
import { ClassService } from '../service/class.service';

const options: ExtraCrudOptions = {
  createDto: CreateClassDto,
  updateDto: UpdateClassDto,
};

@Controller('classes')
@ApiTags('Classes')
export class ClassController extends TEntityCrudController<Classes>(options) {
  constructor(private readonly ClassService: ClassService) {
    super(ClassService);
  }
}
