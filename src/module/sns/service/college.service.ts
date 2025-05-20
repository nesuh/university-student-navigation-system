import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from 'src/db/entities';
import { CreateCollegeDto } from '../dtos/college.dto';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
  ) {}
  async findAllCollege(): Promise<College[]> {
    return await this.collegeRepository.find();
  }

  async findOneCollege(id: number): Promise<College> {
    const result = await this.collegeRepository.findOne({
      where: { id },
      relations: {
        scienceType: true,
    }});
    if (!result) {
      throw new NotFoundException(`College with ID ${id} not found`);
    }
    return result;
  }

  async registerCollege(body: CreateCollegeDto): Promise<College> {
    const college = this.collegeRepository.create(body);
    return await this.collegeRepository.save(college);
  }
}