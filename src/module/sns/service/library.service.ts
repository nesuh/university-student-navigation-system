import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building, Lab, Library } from 'src/db/entities';
import { TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateLibraryDto } from '../dtos';

@Injectable()
export class LibraryService extends TExtraCrudService<Library> {
  constructor(
    @InjectRepository(Library)
    private readonly libraryRepository: Repository<Library>,
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(libraryRepository,'id');
  }

  async registerLab(body: CreateLibraryDto) {

    const building = await this.buildingRepository.findOne({
      where:{
        id:body.buildingId}});

        if(!building){
          throw new BadRequestException('Building not found');
        }

        const lab = this.libraryRepository.create({
          name: body.name,
          headOfLibrary: body.headOfLibrary,
         capacity:body.capacity,
          operationalTime: body.operationalTime,
          building
        });
    
        await this.libraryRepository.save(lab);
        return lab;
      }

          async findAll(){
              const data = await this.libraryRepository.find({
                relations:{
                  building:true,
                }
          })
          return {
            count: data.length,
            items: data,
          };
          }
          async findOneLab(id: number):Promise<Library | undefined> {
            return await this.libraryRepository.findOne({
              where: {
                id,
              },
              relations:{
                building:true
              }
            });
          } 
}
