import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lab } from 'src/db/entities';
import { TEntityCrudService, TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class labService extends TExtraCrudService<Lab> {
  constructor(
    @InjectRepository(Lab)
    private readonly labRepository: Repository<Lab>,
  ) {
    super(labRepository,'id');
  }
}
