import { Body, Controller, Post ,Get, Param} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {TEntityCrudController } from 'src/shared/controller';
import { EntityCrudOptions,  } from 'src/shared/types/crud-option.type';

import { CreateAdminstrativeUnitDto, UpdateAdminstrativeUnitDto } from '../dtos';
import { AllowAnonymous } from 'src/shared/authorization';
import { AdministrativeUnit } from 'src/db/entities/adminstrative-unit.entity';
import { AdminstrativeUnitService } from '../service/adminstrative-unit.service';

const options: EntityCrudOptions = {
  createDto: CreateAdminstrativeUnitDto,
  updateDto: UpdateAdminstrativeUnitDto,
};

@Controller('adminstrative-unit')
@ApiTags('Adminstrative-Unit')
export class AdminstrativeUnitController extends TEntityCrudController<AdministrativeUnit>(options) {
  constructor(private readonly adminstrativeUnitService: AdminstrativeUnitService) {
    super(adminstrativeUnitService);
  }

  @Post()
  async registerAdminstrativeUnit(@Body() body: CreateAdminstrativeUnitDto) {
    return await this.adminstrativeUnitService.registerAdminstrativeUnit(body);
  }

  @AllowAnonymous()
  @Get('list-all')
       async getFacultyList() { 
       return await this.adminstrativeUnitService.findAll();
    }
      @AllowAnonymous()
      @Get('/:id')
      async findOneAdminstrativeUnit(
          @Param('id') id: number
      ):Promise<AdministrativeUnit | undefined> {
          return await this.adminstrativeUnitService.findOneAdminstrativeUnit(id)
      }

}
