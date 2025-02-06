import { Controller } from '@nestjs/common';
import { CreateOfficeDto, UpdateOfficeDto } from '../dtos';
import { ApiTags } from '@nestjs/swagger';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController } from 'src/shared/controller';
import { OfficeService } from '../service/office.service';
import { Office } from 'src/db/entities';

const options: ExtraCrudOptions = {
  createDto: CreateOfficeDto,
  updateDto: UpdateOfficeDto,
};

@Controller('office')
@ApiTags('Office')
export class OfficeController extends TEntityCrudController<Office>(options) {
  constructor(private readonly officeService: OfficeService) {
    super(officeService);
  }
}
