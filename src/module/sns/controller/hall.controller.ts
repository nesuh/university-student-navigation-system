import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Hall } from 'src/db/entities';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import {  CreateHallDto, UpdateHallDto } from '../dtos';
import { HallService } from '../service/hall.service';
import { AllowAnonymous } from 'src/shared/authorization';

const options: ExtraCrudOptions = {
  entityIdName:'hallId',
  createDto: CreateHallDto,
  updateDto: UpdateHallDto,
};

@Controller('hall')
@ApiTags('Hall')
export class HallController extends TExtraCrudController<Hall>(options) {
  constructor(private readonly hallService: HallService) {
    super(hallService);
  }

  @Post()
  async registerHall(@Body() body: CreateHallDto) {
    return await this.hallService.registerHall(body);
  }

  @AllowAnonymous()
  @Get('list-all')
  async findAllRegisterHall() {
    return await this.hallService.findAll()
  }

  @AllowAnonymous()
  @Get('/:id')
  async findOne(
      @Param('id') id: string
  ):Promise<Hall | undefined> {
      return await this.hallService.findOne(id)
  }
}
