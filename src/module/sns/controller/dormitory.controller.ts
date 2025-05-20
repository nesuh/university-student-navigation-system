import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Dormitory } from 'src/db/entities';
import { TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { DormitoryService } from '../service/dormitory.service';
import { CreateDormitoryDto, UpdateDormitoryDto } from '../dtos';
import { AllowAnonymous } from 'src/shared/authorization';

const options: ExtraCrudOptions = {
  entityIdName: 'dormitoryId',
  createDto: CreateDormitoryDto,
  updateDto: UpdateDormitoryDto,
};

@Controller('dormitory')
@ApiTags('Dormitory')
export class DormitoryController extends TExtraCrudController<Dormitory>(
  options,
) {
  constructor(private readonly dormitoryService: DormitoryService) {
    super(dormitoryService);
  }

  @Post()
  async registerDormitory(@Body() body: CreateDormitoryDto) {
    return await this.dormitoryService.registerDormitory(body);
  }
  @AllowAnonymous()
  @Get('list-all')
  async findAllRegisterDormitory() {
    return await this.dormitoryService.findAll()
  }
  
  @AllowAnonymous()
  @Get('/:id')
  async findOneDorimitory(
      @Param('id') id: number
  ):Promise<Dormitory | undefined> {
      return await this.dormitoryService.findOneDorimitory(id)
  }
}
