import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lab } from 'src/db/entities';
import { TEntityCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class labService extends TEntityCrudService<Lab> {
  constructor(
    @InjectRepository(Lab)
    private readonly labRepository: Repository<Lab>,
  ) {
    super(labRepository);
  }
}
