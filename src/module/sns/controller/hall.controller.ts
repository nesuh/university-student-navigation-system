import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Hall } from 'src/db/entities';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import {  CreateHallDto, UpdateHallDto } from '../dtos';
import { HallService } from '../service/hall.service';

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
}
