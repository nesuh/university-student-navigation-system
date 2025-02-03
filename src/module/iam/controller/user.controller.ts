import { Controller } from '@nestjs/common';
import { User } from 'src/db/entities';
import { EntityCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController } from 'yegara';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { UserService } from '../service/user.service';
import { ApiTags } from '@nestjs/swagger';


const options: EntityCrudOptions = {
    createDto: CreateUserDto,
    updateDto: UpdateUserDto,
  };

@Controller('user')
@ApiTags('User')
export class UserController extends TEntityCrudController<User>(options) {
    constructor(
        private readonly userService: UserService,
    ){
        super(userService);
    }
}
