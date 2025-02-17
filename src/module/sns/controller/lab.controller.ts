import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Lab } from 'src/db/entities';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateLabDto, UpdateLabDto } from '../dtos';
import { labService } from '../service/lab.service';
import { AllowAnonymous } from 'src/shared/authorization';

const options: ExtraCrudOptions = {
  entityIdName: 'labId',
  createDto: CreateLabDto,
  updateDto: UpdateLabDto,
};

@Controller('lab')
@ApiTags('Lab')
export class LabController extends TExtraCrudController<Lab>(options) {
  constructor(private readonly labService: labService) {
    super(labService);
  }
  @Post()
  async registerLab(@Body() body: CreateLabDto) {
    return await this.labService.registerLab(body);
  }

  @AllowAnonymous()
    @Get('list-all')
      async findAllRegisterOffice() {
          return await this.labService.findAll()
      }

   @AllowAnonymous()
    @Get('/:id')
      async findOne(
          @Param('id') id: string
      ):Promise<Lab | undefined> {
          return await this.labService.findOne(id)
      }
}
