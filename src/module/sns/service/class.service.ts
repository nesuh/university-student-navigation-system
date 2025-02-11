import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classes } from 'src/db/entities';
import { TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class ClassService extends TExtraCrudService<Classes> {
  constructor(
    @InjectRepository(Classes)
    private readonly classRepository: Repository<Classes>,
  ) {
    super(classRepository,'id');
  }
}
