import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dormitory } from 'src/db/entities';
import { TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class DormitoryService extends TExtraCrudService<Dormitory> {
  constructor(
    @InjectRepository(Dormitory)
    private readonly dormitoryRepository: Repository<Dormitory>,
  ) {
    super(dormitoryRepository,'id');
  }
}
