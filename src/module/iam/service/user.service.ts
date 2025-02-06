import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/db/entities';
import { TEntityCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TEntityCrudService<Users> {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {
    super(userRepository);
  }
}
