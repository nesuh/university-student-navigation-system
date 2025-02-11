import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hall } from 'src/db/entities';
import { TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class HallService extends TExtraCrudService<Hall> {
  constructor(
    @InjectRepository(Hall)
    private readonly hallRepository: Repository<Hall>,
  ) {
    super(hallRepository,'id');
  }
}
