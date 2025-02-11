import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Building, Office } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService, TExtraCrudService } from 'src/shared/service';
import { CreateOfficeDto } from '../dtos';

@Injectable()
export class OfficeService extends TExtraCrudService<Office> {
  constructor(
    @InjectRepository(Office)
    private readonly officeRepository: Repository<Office>,
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {
    super(officeRepository,'id');
  }

  async registerOffice(body: CreateOfficeDto) {

    const building = await this.buildingRepository.findOne({
      where:{
        id:body.buildingId}});

        if(!building){
          throw new BadRequestException('Building not found');
        }

        const office = this.officeRepository.create({
          name: body.name,
          phoneNumber: body.phoneNumber,
          email: body.email,
          floorNumber: body.floorNumber,
          roomNumber: body.roomNumber,
          operationalTime: body.operationalTime,
          building
        });
    
        await this.officeRepository.save(office);
        return office;
      } 
}
