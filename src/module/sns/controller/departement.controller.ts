import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Department } from 'src/db/entities';
import { CreateDepartmentDto, UpdateDepartmentDto } from '../dtos';
import { DepartmentService } from '../service/department.service';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';

const options: ExtraCrudOptions = {
  createDto: CreateDepartmentDto,
  updateDto: UpdateDepartmentDto,
};

@Controller('department')
@ApiTags('Department')
export class DepartmentController extends TEntityCrudController<Department>(
  options,
) {
  constructor(private readonly departmentService: DepartmentService) {
    super(departmentService);
  }
}
