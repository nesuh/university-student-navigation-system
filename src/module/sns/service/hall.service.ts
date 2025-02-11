import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building, Hall } from 'src/db/entities';
import { TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateHallDto } from '../dtos';

@Injectable()
export class HallService extends TExtraCrudService<Hall> {
  constructor(
    @InjectRepository(Hall)
    private readonly hallRepository: Repository<Hall>,
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(hallRepository,'id');
  }
  
  async registerHall(body: CreateHallDto) {

    const building = await this.buildingRepository.findOne({
      where:{
        id:body.buildingId}});

        if(!building){
          throw new BadRequestException('Building not found');
        }

        const hall = this.hallRepository.create({
          name: body.name,
          capacity: body.capacity,
          description: body.description,
          building
        });
    
        await this.hallRepository.save(hall);
        return hall;
      }
}
