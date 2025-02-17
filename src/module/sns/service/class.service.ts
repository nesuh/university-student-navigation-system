import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building, Classes } from 'src/db/entities';
import { TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateClassDto } from '../dtos';

@Injectable()
export class ClassService extends TExtraCrudService<Classes> {
  constructor(
    @InjectRepository(Classes)
    private readonly classRepository: Repository<Classes>,

    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(classRepository,'id');
  }
  async registerClass(body: CreateClassDto) {

    const building = await this.buildingRepository.findOne({
      where:{
        id:body.buildingId}});

        if(!building){
          throw new BadRequestException('Building not found');
        }

        const classRoom = this.classRepository.create({
          name: body.name,
          floorNumber: body.floorNumber,
          roomType: body.roomType,
          roomNumber: body.roomNumber,
          building
        });
    
        await this.classRepository.save(classRoom);
        return classRoom;
      }

      async findAll(){
          const data = await this.classRepository.find({
            relations:{
              building:true,
            }
      })
      return {
        count: data.length,
        items: data,
      };
      }
      async findOne(id: string):Promise<Classes | undefined> {
        return await this.classRepository.findOne({
          where: {
            id,
          },
          relations:{
            building:true
          }
        });
      }
}
