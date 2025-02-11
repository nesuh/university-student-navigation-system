import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { Faculty } from 'src/db/entities';
import { FacultyService } from '../service/faculty.service';
import { CreateFacultyDto, UpdateFacultyDto } from '../dtos/faculty.dto';
import { CreateRegistrationDto } from '../dtos';

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

  @Post('Register Faculty in DMU')
  async registerFaculty(@Body() body: CreateRegistrationDto):Promise<Faculty> {
    return await this.facultyService.registerFaculty(body);
  }
}
