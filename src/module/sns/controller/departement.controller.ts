import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Department } from 'src/db/entities';
import { CreateDepartmentDto, UpdateDepartmentDto } from '../dtos';
import { DepartmentService } from '../service/department.service';
import { TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { AllowAnonymous } from 'src/shared/authorization';

const options: ExtraCrudOptions = {
  entityIdName: 'departmentId',
  createDto: CreateDepartmentDto,
  updateDto: UpdateDepartmentDto,
};

@Controller('department')
@ApiTags('Department')
export class DepartmentController extends TExtraCrudController<Department>(
  options,
) {
  constructor(private readonly departmentService: DepartmentService) {
    super(departmentService);
  }
  @Post()
  async registerDepartment(
    @Body() body: CreateDepartmentDto) {
    return await this.departmentService.registerDepartment(body);
  }
 @AllowAnonymous()
    @Get('list-all')
         async getDepartmentList() {
         return await this.departmentService.findAll();
      }
  @AllowAnonymous()
      @Get('/:id')
      async findOneDepartment(
          @Param('id') id: number
      ):Promise<Department | undefined> {
          return await this.departmentService.findOneDepartment(id)
      }
}
