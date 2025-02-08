import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Field } from 'src/db/entities/fields.entity';
import { TEntityCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class FieldService extends TEntityCrudService<Field> {
  constructor(
    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>,
  ) {
    super(fieldRepository);
  }
}
