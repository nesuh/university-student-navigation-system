import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateBuildingDto, FilterDto, UpdateBuildingDto } from '../dtos';
import { Building } from 'src/db/entities';
import { BuildingService } from '../service/building.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { EntityCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController } from 'src/shared/controller';
import { AllowAnonymous } from 'src/shared/authorization';


const options: EntityCrudOptions = {
  createDto: CreateBuildingDto,
  updateDto: UpdateBuildingDto,
};

@Controller('building')
@ApiTags('Building')
export class BuildingController extends TEntityCrudController<Building>(
  options,
) {
  constructor(private readonly buildingService: BuildingService) {
    super(buildingService);
  }

@AllowAnonymous()
@Post('serarch-filter')
// @ApiQuery({
//   name: 'name',
//   required: false,
//   description: 'Search filter for building name',
//   type: String,
// })
async filterBuilding(
  @Body() q: FilterDto,
){
return await this.buildingService.searchFilter(q);
}
}



   
      // "Main Library",

