import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOfficeDto, UpdateOfficeDto } from '../dtos';
import { ApiTags } from '@nestjs/swagger';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { OfficeService } from '../service/office.service';
import { Office } from 'src/db/entities';
import { AllowAnonymous } from 'src/shared/authorization';

const options: ExtraCrudOptions = {
  entityIdName: 'officeId',
  createDto: CreateOfficeDto,
  updateDto: UpdateOfficeDto,
};

@Controller('office')
@ApiTags('Office')
export class OfficeController extends TExtraCrudController<Office>(options) {
  constructor(private readonly officeService: OfficeService) {
    super(officeService);
  }

  @Post()
  async registerOffice(@Body() body: CreateOfficeDto) {
    return await this.officeService.registerOffice(body);
  }

  @AllowAnonymous()
    @Get('list-all')
    async findAllRegisterOffice() {
        return await this.officeService.findAllRegisterOffice()
    }

  @AllowAnonymous()
    @Get('/:id')
    async findOneOfficer(
        @Param('id') id: number
    ):Promise<Office | undefined> {
        return await this.officeService.findOneOfficer(id)
    }
}
