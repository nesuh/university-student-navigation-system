import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'src/shared/service';
import { ScienceType } from 'src/db/entities';

@Injectable()
export class ScienceTypeService extends TEntityCrudService<ScienceType> {
  constructor(
    @InjectRepository(ScienceType)
    private readonly scienceTypeRepository: Repository<ScienceType>,
  ) {
    super(scienceTypeRepository);
  }
}
