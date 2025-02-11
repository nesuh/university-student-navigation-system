import { Body, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Classes } from 'src/db/entities';
import { TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateClassDto, UpdateClassDto } from '../dtos';
import { ClassService } from '../service/class.service';

const options: ExtraCrudOptions = {
  entityIdName: 'classId',
  createDto: CreateClassDto,
  updateDto: UpdateClassDto,
};

@Controller('classes')
@ApiTags('Classes')
export class ClassController extends TExtraCrudController<Classes>(options) {
  constructor(private readonly classService: ClassService) {
    super(classService);
  }
  async registerClass(@Body() body: CreateClassDto) {
    return await this.classService.registerClass(body);
  }
}
