import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Department} from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TExtraCrudService } from 'src/shared/service';

@Injectable()
export class DepartmentService extends TExtraCrudService<Department> {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {
    super(departmentRepository,'id');
  }
}
