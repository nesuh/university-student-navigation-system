import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Department, Faculty} from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TExtraCrudService } from 'src/shared/service';
import { CreateDepartmentDto } from '../dtos';

@Injectable()
export class DepartmentService extends TExtraCrudService<Department> {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,

    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {
    super(departmentRepository,'id');
  }
  
  async registerDepartment(body: CreateDepartmentDto) {

    const faculty = await this.facultyRepository.findOne({
      where:{
        id:body.facultyId}});

        if(!faculty){
          throw new BadRequestException('Faculty not found');
        }

        const department = this.departmentRepository.create({
          name: body.name,
          faculty
        });
    
        await this.departmentRepository.save(department);
        return department;
    
  }

  async findAll(){
    const data = await this.departmentRepository.find();
    return {
      count: data.length,
      items: data,
    };
  }
}
