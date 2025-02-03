import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'yegara';
import { Room } from 'src/db/entities/room.entity';

@Injectable()
export class RoomService extends TEntityCrudService<Room> {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {
    super(roomRepository);
  }
}
