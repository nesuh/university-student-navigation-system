import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building, Dormitory } from 'src/db/entities';
import { TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateDormitoryDto } from '../dtos';

@Injectable()
export class DormitoryService extends TExtraCrudService<Dormitory> {
  constructor(
    @InjectRepository(Dormitory)
    private readonly dormitoryRepository: Repository<Dormitory>,
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(dormitoryRepository,'id');
  }
  async registerDormitory (body: CreateDormitoryDto) {

    const building = await this.buildingRepository.findOne({
      where:{
        id:body.buildingId}});

        if(!building){
          throw new BadRequestException('Building not found');
        }

        const dormitory = this.dormitoryRepository.create({
          gender: body.gender,
          dormitory_type: body.dormitory_type,
          number_of_student: body.number_of_student,
          number_of_room: body.number_of_room,
          buildings: building
              });
    
        await this.dormitoryRepository.save(dormitory);
        return dormitory;
      }
}
