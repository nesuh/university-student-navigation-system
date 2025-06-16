import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Building } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'src/shared/service';
import { FilterDto } from '../dtos';
import { groupBy } from 'rxjs';

@Injectable()
export class BuildingService extends TEntityCrudService<Building> {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(buildingRepository);
  }

async searchFilter(filterDto: FilterDto) {
  const { category, name, block } = filterDto;

  const query = this.buildingRepository
    .createQueryBuilder('building')

  // Category-specific joins and filters
  switch (category) {
    case 'Lab':
      query.leftJoinAndSelect('building.labs', 'labs')
           .where('labs.id IS NOT NULL');
      if (name) query.andWhere('LOWER(labs.name) LIKE LOWER(:name)', { name: `%${name}%` });
      break;

    case 'Office':
      query.leftJoinAndSelect('building.offices', 'offices')
           .where('offices.id IS NOT NULL');
      if (name) query.andWhere('LOWER(offices.name) LIKE LOWER(:name)', { name: `%${name}%` });
      break;

    case 'Dormitory':
      query.leftJoinAndSelect('building.dormitories', 'dormitories')
           .where('dormitories.id IS NOT NULL');
      if (name) query.andWhere('LOWER(dormitories.name) LIKE LOWER(:name)', { name: `%${name}%` });
      break;

    case 'Cafeteria':
      query.leftJoinAndSelect('building.cafeteria', 'cafeteria')
           .where('cafeteria.id IS NOT NULL');
      if (name) query.andWhere('LOWER(cafeteria.name) LIKE LOWER(:name)', { name: `%${name}%` });
      break;

    case 'Classroom':
      query.leftJoinAndSelect('building.classes', 'classes')
           .where('classes.id IS NOT NULL');
      if (name) query.andWhere('LOWER(classes.name) LIKE LOWER(:name)', { name: `%${name}%` });
      break;

    case 'Registration':
      query.leftJoinAndSelect('building.registrations', 'registrations')
           .where('registrations.id IS NOT NULL');
      if (name) query.andWhere('LOWER(registrations.name) LIKE LOWER(:name)', { name: `%${name}%` });
      break;
    case 'Library':
      query.leftJoinAndSelect('building.Library','librarys')
           .where('librarys.d IS NOT NULL');
      if(name) query.andWhere('LOWER(librarys.name) LIKE LOWER(:name)', { name: `%${name}%` });
        break;
        
    case 'College':
      query.leftJoinAndSelect('building.college', 'college')
           .where('college.id IS NOT NULL');
      if (name) query.andWhere('LOWER(college.name) LIKE LOWER(:name)', { name: `%${name}%` });
      break;

    case 'Department':
      query.leftJoinAndSelect('building.department', 'department')
           .where('department.id IS NOT NULL');
      if (name) query.andWhere('LOWER(department.name) LIKE LOWER(:name)', { name: `%${name}%` });
      break;

    case 'Building':
    default:
      if (name) {
        query.where('LOWER(building.name) LIKE LOWER(:name)', { name: `%${name}%` });
      }
      break;
  }

  // Common block filter
  if (block) {
    query.andWhere('building.block = :block', { block });
  }

  return await query.getMany();
}


}
