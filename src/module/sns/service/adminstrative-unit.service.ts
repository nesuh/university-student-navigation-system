import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministrativeUnit } from 'src/db/entities';
import { TEntityCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateAdminstrativeUnitDto } from '../dtos';

@Injectable()
export class AdminstrativeUnitService extends TEntityCrudService<AdministrativeUnit> {

  constructor(
    @InjectRepository(AdministrativeUnit)
    private readonly adminstrativeUnitRepository: Repository<AdministrativeUnit>,
  ) {
    super(adminstrativeUnitRepository);
  }

  async registerAdminstrativeUnit(body: CreateAdminstrativeUnitDto) {

    const au = await this.adminstrativeUnitRepository.findOne({
      where:{
        name: body.name,
      }});

        if(au){
          throw new BadRequestException('Adminstrative Unit already exists');
        }
        const adminUnit = this.adminstrativeUnitRepository.create({
          name: body.name,
                });
    
        await this.adminstrativeUnitRepository.save(adminUnit);
        return adminUnit;
    
  }

   async findAll() {
    const data = await this.adminstrativeUnitRepository.find();
    return {
      count: data.length,
      items: data,
    };
  }
    async findOneAdminstrativeUnit(id: number):Promise<AdministrativeUnit | undefined> {
      return await this.adminstrativeUnitRepository.findOne({
        where: {
          id,
        },
      });
    } 
}
