import { Controller } from '@nestjs/common';
import { CreateBuildingDto, UpdateBuildingDto } from '../dtos';
import { Building } from 'src/db/entities';
import { BuildingService } from '../service/building.service';
import { ApiTags } from '@nestjs/swagger';
import { EntityCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController } from 'src/shared/controller';

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
}
