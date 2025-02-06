import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/db/entities/room.entity';
import { TEntityCrudService } from 'src/shared/service';

@Injectable()
export class RoomService extends TEntityCrudService<Room> {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {
    super(roomRepository);
  }
}
