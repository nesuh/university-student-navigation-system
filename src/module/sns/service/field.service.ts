import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dormitory } from 'src/db/entities';
import { Field } from 'src/db/entities/fields.entity';
import { TEntityCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class FieldService extends TEntityCrudService<Field> {
  constructor(
    @InjectRepository(Dormitory)
    private readonly fieldRepository: Repository<Field>,
  ) {
    super(fieldRepository);
  }
}
