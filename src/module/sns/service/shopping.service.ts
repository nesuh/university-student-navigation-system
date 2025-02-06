import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Shopping } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'src/shared/service';

@Injectable()
export class ShoppingService extends TEntityCrudService<Shopping> {
  constructor(
    @InjectRepository(Shopping)
    private readonly shoppingRepository: Repository<Shopping>,
  ) {
    super(shoppingRepository);
  }
}
