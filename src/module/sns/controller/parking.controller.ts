import { Controller } from '@nestjs/common';
import { CreateParkingDto, UpdateParkingDto } from '../dtos';
import { ApiTags } from '@nestjs/swagger';
import { Parking } from 'src/db/entities';
import { EntityCrudOptions, ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { ParkingService } from '../service/parking.service';

const options: EntityCrudOptions = {
  createDto: CreateParkingDto,
  updateDto: UpdateParkingDto,
};

@Controller('parking')
@ApiTags('Parking')
export class ParkingController extends TEntityCrudController<Parking>(options) {
  constructor(private readonly parkingService: ParkingService) {
    super(parkingService);
  }
}
