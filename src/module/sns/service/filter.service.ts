import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building } from 'src/db/entities';
import { Repository } from 'typeorm';

@Injectable()
export class FilterService {
  constructor(
    @InjectRepository(Building)
    private readonly yourEntityRepository: Repository<Building>,
  ) {}

  async search(filter: any, sort: string, page: number, limit: number) {
    const queryBuilder = this.yourEntityRepository.createQueryBuilder('entity');

    // Apply filters to the query
    if (filter) {
      for (const key in filter) {
        if (filter.hasOwnProperty(key)) {
          queryBuilder.andWhere(`entity.${key} = :value`, { value: filter[key] });
        }
      }
    }

    // Apply sorting to the query
    if (sort) {
      const [field, order] = sort.split(':');
      
      // Ensure the order is either 'ASC' or 'DESC', default to 'ASC'
      const direction = ['ASC', 'DESC'].includes(order.toUpperCase())
        ? (order.toUpperCase() as 'ASC' | 'DESC') // Type assertion here
        : 'ASC';
      
      queryBuilder.orderBy(`entity.${field}`, direction);
    }

    // Paginate the results
    const [data, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return {
      data,
      total,
      page,
      limit,
    };
  }
}
