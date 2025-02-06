import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Building } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'src/shared/service';
@Injectable()
export class BuildingService extends TEntityCrudService<Building> {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(buildingRepository);
  }
}
