import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty, ScienceType } from 'src/db/entities';
import { TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from '../dtos';

@Injectable()
export class FacultyService extends TExtraCrudService<Faculty> {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,

    @InjectRepository(ScienceType)
    private readonly scienceTypeRepository: Repository<ScienceType>,
  ) {
    super(facultyRepository,'id');
  }

  async registerFaculty(body: CreateFacultyDto): Promise<Faculty> {

    const scienceType = await this.scienceTypeRepository.findOne({
      where:{
        id:body.scienceTypeId}});

        if(!scienceType){
          throw new BadRequestException('Science Type not found');
        }

        const faculty = this.facultyRepository.create({
          name: body.name,
          scienceType
        });
    
        await this.facultyRepository.save(faculty);
        return faculty;
    
  }

}
