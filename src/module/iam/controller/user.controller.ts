import { Controller } from '@nestjs/common';
import { Users } from 'src/db/entities';
import { EntityCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { UserService } from '../service/user.service';
import { ApiTags } from '@nestjs/swagger';
import { TEntityCrudController } from 'src/shared/controller';

const options: EntityCrudOptions = {
  createDto: CreateUserDto,
  updateDto: UpdateUserDto,
};

@Controller('user')
@ApiTags('User')
export class UserController extends TEntityCrudController<Users>(options) {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
