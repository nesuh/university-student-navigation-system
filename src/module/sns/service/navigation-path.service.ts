import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NavigationPath } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TExtraCrudService } from 'src/shared/service';

@Injectable()
export class NavigationPathService extends TExtraCrudService<NavigationPath> {
  constructor(
    @InjectRepository(NavigationPath)
    private readonly navigationPathRepository: Repository<NavigationPath>,
  ) {
    super(navigationPathRepository,'id');
  }
}
