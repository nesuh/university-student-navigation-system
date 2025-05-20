import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Classes } from 'src/db/entities';
import { TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateClassDto, UpdateClassDto } from '../dtos';
import { ClassService } from '../service/class.service';
import { AllowAnonymous } from 'src/shared/authorization';

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
  @Post()
  async registerClass(@Body() body: CreateClassDto) {
    return await this.classService.registerClass(body);
  }
  @AllowAnonymous()
   @Get('list-all')
  async findAllRegisterClass(){
    return await this.classService.findAll()
  }
  @AllowAnonymous()
   @Get('/:id')
    async findOneClass(
        @Param('id') id: number
    ):Promise<Classes | undefined> {
        return await this.classService.findOneClass(id)
    }
  
}
