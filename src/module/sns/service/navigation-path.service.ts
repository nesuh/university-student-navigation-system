import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NavigationPath } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'yegara';

@Injectable()
export class NavigationPathService extends TEntityCrudService<NavigationPath> {
  constructor(
    @InjectRepository(NavigationPath)
    private readonly navigationPathRepository: Repository<NavigationPath>,
  ) {
    super(navigationPathRepository);
  }
}
