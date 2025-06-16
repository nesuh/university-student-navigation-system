import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Lab, Library } from 'src/db/entities';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { CreateLabDto, CreateLibraryDto, UpdateLabDto, UpdateLibraryDto } from '../dtos';
import { labService } from '../service/lab.service';
import { AllowAnonymous } from 'src/shared/authorization';
import { LibraryService } from '../service/library.service';

const options: ExtraCrudOptions = {
  entityIdName: 'LibraryId',
  createDto: CreateLibraryDto,
  updateDto: UpdateLibraryDto,
};

@Controller('lab')
@ApiTags('Lab')
export class LibraryController extends TExtraCrudController<Library>(options) {
  constructor(private readonly libraryService: LibraryService) {
    super(libraryService);
  }
  @Post()
  async registerLab(@Body() body: CreateLibraryDto) {
    return await this.libraryService.registerLab(body);
  }

  @AllowAnonymous()
    @Get('list-all')
      async findAllRegisterOffice() {
          return await this.libraryService.findAll()
      }

   @AllowAnonymous()
    @Get('/:id')
      async findOneLab(
          @Param('id') id: number
      ):Promise<Library | undefined> {
          return await this.libraryService.findOneLab(id)
      }
}
