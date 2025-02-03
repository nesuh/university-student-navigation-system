import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Departments } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'yegara';

@Injectable()
export class DepartmentService extends TEntityCrudService<Departments>{
  constructor(
    @InjectRepository(Departments)
    private readonly departmentRepository: Repository<Departments>,
  ) {
    super(departmentRepository);
  }
}
