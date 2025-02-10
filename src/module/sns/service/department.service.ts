import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Department} from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'src/shared/service';

@Injectable()
export class DepartmentService extends TEntityCrudService<Department> {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {
    super(departmentRepository);
  }
}
