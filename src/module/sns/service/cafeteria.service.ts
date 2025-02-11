import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building, Cafeteria } from 'src/db/entities';
import { TEntityCrudService, TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateCafeteriaDto } from '../dtos';

@Injectable()
export class CafeteriaService extends TExtraCrudService<Cafeteria> {
  constructor(
    @InjectRepository(Cafeteria)
    private readonly cafeteriaRepository: Repository<Cafeteria>,

    @InjectRepository(Building)
    private readonly BuildingRepository: Repository<Building>,
  ) {
    super(cafeteriaRepository,'id');
  }

  async registerCafeteria(body: CreateCafeteriaDto) {

    const building = await this.BuildingRepository.findOne({
      where:{
        id:body.buildingId}});

        if(!building){
          throw new BadRequestException('Building not found');
        }

        const cafeteria = this.cafeteriaRepository.create({
          name: body.name,
          type: body.type,
          capacity: body.capacity,
          operationalTime: body.operationalTime,
          description: body.description,
          building
        });
    
        await this.cafeteriaRepository.save(cafeteria);
        return cafeteria;

         }
}
