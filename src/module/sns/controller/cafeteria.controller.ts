import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cafeteria } from 'src/db/entities';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { CafeteriaService } from '../service/cafeteria.service';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateCafeteriaDto, UpdateCafeteriaDto } from '../dtos';
import { AllowAnonymous } from 'src/shared/authorization';

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

  @Post()
  async registerCafeteria(@Body() body: CreateCafeteriaDto) {
    return await this.cafeteriaService.registerCafeteria(body);
  }
  @AllowAnonymous()
  @Get('list-all')
  async findAllRegisterCafeteria() {
    return await this.cafeteriaService.findAllRegisterCafeteria()
  }
  @AllowAnonymous()
  @Get('/:id')
  async findOneCafteria(
      @Param('id') id: number
  ):Promise<Cafeteria | undefined> {
      return await this.cafeteriaService.findOneCafteria(id)
  }
}
