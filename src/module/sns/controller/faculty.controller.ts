import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TEntityCrudController } from 'src/shared/controller';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { Faculty } from 'src/db/entities';
import { FacultyService } from '../service/faculty.service';
import { CreateFacultyDto, UpdateFacultyDto } from '../dtos/faculty.dto';

const options: ExtraCrudOptions = {
  createDto: CreateFacultyDto,
  updateDto: UpdateFacultyDto,
};

@Controller('faculty')
@ApiTags('faculty')
export class FacultyController extends TEntityCrudController<Faculty>(options) {
  constructor(private readonly facultyService: FacultyService) {
    super(facultyService);
  }
}
