import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Building, Department, Faculty, Registration, ScienceType } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TExtraCrudService } from 'src/shared/service';
import { CreateRegistrationDto } from '../dtos';

@Injectable()
export class RegistrationService extends TExtraCrudService<Registration> {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
    @InjectRepository(ScienceType)
    private readonly scienceTypeRepository: Repository<ScienceType>,
  ) {
    super(registrationRepository,'id');
  }

  async registerRegistration(body: CreateRegistrationDto) {

 const entity=await Promise.all([
      this.buildingRepository.findOne({
        where:{
          id:body.buildingId}})
        ,
        this.departmentRepository.findOne({
          where:{
            id:body.departmentId}})
        ,
        this.facultyRepository.findOne({
          where:{
            id:body.facultyId}})
        ,
        this.scienceTypeRepository.findOne({
          where:{
            id:body.scienceTypeId}})
        ]);

        const [building, department, faculty, scienceType] = entity;

        if(!building){
          throw new BadRequestException('Building not found');
        }
        if(!department){
          throw new BadRequestException('Department not found');
        }
        if(!faculty){
          throw new BadRequestException('Faculty not found');
        }
        if(!scienceType){
          throw new BadRequestException('Science Type not found');
        }
        const registration = this.registrationRepository.create({
          name: body.name,
          phoneNumber: body.phoneNumber,
          email: body.email,
          floorNumber: body.floorNumber,
          roomNumber: body.roomNumber,
          building,
          department,
          faculty,
          scienceType
        });
    
        await this.registrationRepository.save(registration);
        return registration;
      } 

      async findAll() {
        const data = await this.registrationRepository.find({ 
          relations:{
            building:true,
            department:true,
            faculty:true, 
            scienceType:true
          },
        });
        return {
          count: data.length,
          items: data,
        };
      }

      async findOne(id: string):Promise<Registration| undefined> {
        return await this.registrationRepository.findOne({
          where: {
            id,
          },
          relations:{
     building:true,
     department:true,
     faculty:true,
     scienceType:true,
          }
        });
      } 


}
