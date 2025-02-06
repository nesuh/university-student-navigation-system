import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dormitory } from 'src/db/entities';
import { TEntityCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class DormitoryService extends TEntityCrudService<Dormitory> {
  constructor(
    @InjectRepository(Dormitory)
    private readonly dormitoryRepository: Repository<Dormitory>,
  ) {
    super(dormitoryRepository);
  }
}
