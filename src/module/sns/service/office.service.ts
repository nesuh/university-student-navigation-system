import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Office } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService, TExtraCrudService } from 'src/shared/service';

@Injectable()
export class OfficeService extends TExtraCrudService<Office> {
  constructor(
    @InjectRepository(Office)
    private readonly officeRepository: Repository<Office>,
  ) {
    super(officeRepository,'id');
  }
}
