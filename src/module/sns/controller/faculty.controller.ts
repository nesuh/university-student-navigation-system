import { Body, Controller, Post ,Get, Param} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { Faculty } from 'src/db/entities';
import { FacultyService } from '../service/faculty.service';
import { CreateFacultyDto, UpdateFacultyDto } from '../dtos/faculty.dto';
import { CreateRegistrationDto } from '../dtos';
import { AllowAnonymous } from 'src/shared/authorization';

const options: ExtraCrudOptions = {
  entityIdName: 'facultyId',
  createDto: CreateFacultyDto,
  updateDto: UpdateFacultyDto,
};

@Controller('faculty')
@ApiTags('faculty')
export class FacultyController extends TExtraCrudController<Faculty>(options) {
  constructor(private readonly facultyService: FacultyService) {
    super(facultyService);
  }

  @Post()
  async registerFaculty(@Body() body: CreateFacultyDto) {
    return await this.facultyService.registerFaculty(body);
  }

  @AllowAnonymous()
  @Get('list-all')
       async getFacultyList() { 
       return await this.facultyService.findAll();
    }
      @AllowAnonymous()
      @Get('/:id')
      async findOneFaculty(
          @Param('id') id: number
      ):Promise<Faculty | undefined> {
          return await this.facultyService.findOneFaculty(id)
      }

}
