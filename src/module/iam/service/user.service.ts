import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/db/entities";
import { Repository } from "typeorm";
import { TEntityCrudService } from "yegara";

@Injectable()
export class UserService extends TEntityCrudService<User>{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){
super(userRepository);
    }
}
