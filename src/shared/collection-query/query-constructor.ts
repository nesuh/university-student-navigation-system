import { Repository, SelectQueryBuilder } from 'typeorm';
import { CollectionQuery } from './collection-query';
import { BadRequestException } from '@nestjs/common';

export class QueryConstructor {
  static constructQuery<T>(
    repository: Repository<T>,
    query: CollectionQuery
  ): SelectQueryBuilder<T> {
    let builder = repository.createQueryBuilder('entity');

    // Apply filtering
    if (query.filter) {
      Object.keys(query.filter).forEach((key) => {
        builder.andWhere(`entity.${key} = :${key}`, { [key]: query.filter[key] });
      });
    }
    // if (!query.filter || query.filter.trim() === '') {
    //   throw new BadRequestException('Search query cannot be empty');
    // } 

    // Apply sorting
    if (query.sort) {
      const [field, order] = query.sort.split(':');
      builder.orderBy(`entity.${field}`, order.toUpperCase() as 'ASC' | 'DESC');
    }

    // Apply pagination
    if (query.page && query.limit) {
      const skip = (query.page - 1) * query.limit;
      builder.skip(skip).take(query.limit);
    }

    return builder;
  }
}
