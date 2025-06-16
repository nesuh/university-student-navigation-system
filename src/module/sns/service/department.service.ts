import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { College, Department} from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TExtraCrudService } from 'src/shared/service';
import { CreateDepartmentDto } from '../dtos';

@Injectable()
export class DepartmentService extends TExtraCrudService<Department> {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,

    @InjectRepository(College)
    private readonly CollegeRepository: Repository<College>,
  ) {
    super(departmentRepository,'id');
  }
  
  async registerDepartment(body: CreateDepartmentDto) {

    const college = await this.CollegeRepository.findOne({
      where:{
        id:body.collegeId}});

        if(!college){
          throw new BadRequestException('College not found');
        }

        const department = this.departmentRepository.create({
          name: body.name,
        });
    
        await this.departmentRepository.save(department);
        return department;
    
  }

  async findAll(){
    const data = await this.departmentRepository.find({
      relations:{
        college:true
      }
    });
    return {
      count: data.length,
      items: data,
    };
  }
  async findOneDepartment(id: number){
    return await this.departmentRepository.findOne({
      where: {
        id,
      },
      relations:{
        college:true
      }
    });
  }
}
