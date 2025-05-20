import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building, Lab } from 'src/db/entities';
import { TEntityCrudService, TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateLabDto } from '../dtos';

@Injectable()
export class labService extends TExtraCrudService<Lab> {
  constructor(
    @InjectRepository(Lab)
    private readonly labRepository: Repository<Lab>,
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(labRepository,'id');
  }

  async registerLab(body: CreateLabDto) {

    const building = await this.buildingRepository.findOne({
      where:{
        id:body.buildingId}});

        if(!building){
          throw new BadRequestException('Building not found');
        }

        const lab = this.labRepository.create({
          name: body.name,
          headOfLab: body.headOfLab,
          floorNumber: body.floorNumber,
          roomNumber: body.roomNumber,
          operationalTime: body.operationalTime,
          building
        });
    
        await this.labRepository.save(lab);
        return lab;
      }

          async findAll(){
              const data = await this.labRepository.find({
                relations:{
                  building:true,
                }
          })
          return {
            count: data.length,
            items: data,
          };
          }
          async findOneLab(id: number):Promise<Lab | undefined> {
            return await this.labRepository.findOne({
              where: {
                id,
              },
              relations:{
                building:true
              }
            });
          } 
}
