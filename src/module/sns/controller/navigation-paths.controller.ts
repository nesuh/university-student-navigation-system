import { Controller } from '@nestjs/common';
import { CreateNavigationDto, UpdateNavigationDto } from '../dtos';
import { ApiTags } from '@nestjs/swagger';
import { NavigationPath } from 'src/db/entities';
import { NavigationPathService } from '../service/navigation-path.service';
import { EntityCrudOptions, ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';

const options: ExtraCrudOptions = {
entityIdName: 'navigationPathId',
  createDto: CreateNavigationDto,
  updateDto: UpdateNavigationDto,
};

@Controller('navigation-paths')
@ApiTags('Navigation Paths')
export class NavigationPathsController extends TExtraCrudController<NavigationPath>(
  options,
) {
  constructor(private readonly navigationPathService: NavigationPathService) {
    super(navigationPathService);
  }
}
