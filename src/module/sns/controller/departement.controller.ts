import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Departments } from 'src/db/entities';
import { ExtraCrudOptions, TEntityCrudController } from 'yegara';
import { CreateDepartmentDto, UpdateDepartmentDto } from '../dtos';
import { DepartmentService } from '../service/department.service';

const options: ExtraCrudOptions = {
    createDto: CreateDepartmentDto,
    updateDto: UpdateDepartmentDto,
  };

@Controller('department')
@ApiTags('Department')
export class DepartmentController extends TEntityCrudController<Departments>(options) {
    constructor(
        private readonly departmentService: DepartmentService,
    ) {
        super(departmentService)
    }
}
