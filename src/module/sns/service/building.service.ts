import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Building } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'src/shared/service';
import { FilterDto } from '../dtos';

@Injectable()
export class BuildingService extends TEntityCrudService<Building> {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(buildingRepository);
  }

  async searchFilter(filterDto: FilterDto) {
    const query = this.buildingRepository
        .createQueryBuilder('building')
        .leftJoinAndSelect('building.classes', 'classes', 'classes.buildingId = building.id')
        .leftJoinAndSelect('building.cafeteria', 'cafeteria', 'cafeteria.buildingId = building.id')
        .where('LOWER(building.name) LIKE LOWER(:name)', { name: `%${filterDto.name}%`})
        .andWhere('LOWER(cafeteria.name) LIKE LOWER(:name)', { name: `%${filterDto.name}%`})
        .getMany();

       return await query;
    }
}
