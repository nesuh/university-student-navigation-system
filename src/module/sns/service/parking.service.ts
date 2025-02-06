import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Parking } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'src/shared/service';

@Injectable()
export class ParkingService extends TEntityCrudService<Parking> {
  constructor(
    @InjectRepository(Parking)
    private readonly parkingRepository: Repository<Parking>,
  ) {
    super(parkingRepository);
  }
}
