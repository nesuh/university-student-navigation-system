import { Controller } from '@nestjs/common';
import { CreateRoomDto, UpdateRoomDto } from '../dtos';
import { ApiTags } from '@nestjs/swagger';

import { Room } from 'src/db/entities/room.entity';
import { RoomService } from '../service/room.service';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController } from 'src/shared/controller';

const options: ExtraCrudOptions = {
  createDto: CreateRoomDto,
  updateDto: UpdateRoomDto,
};

@Controller('room')
@ApiTags('Room')
export class RoomController extends TEntityCrudController<Room>(options) {
  constructor(private readonly roomService: RoomService) {
    super(roomService);
  }
}
