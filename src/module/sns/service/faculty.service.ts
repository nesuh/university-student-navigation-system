import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from 'src/db/entities';
import {TEntityCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class FacultyService extends TEntityCrudService<Faculty> {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {
    super(facultyRepository);
  }
}
