import { BadRequestException, Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Field } from 'src/db/entities/fields.entity';
import {  TExtraCrudService } from 'src/shared/service';
import { Repository } from 'typeorm';
import { CreateFieldsDto } from '../dtos';
import { Department } from 'src/db/entities';


@Injectable()
export class FieldService extends TExtraCrudService<Field> {
  constructor(
    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {
    super(fieldRepository,'id');
  }
async registerField(body: CreateFieldsDto) {

    const department = await this.departmentRepository.findOne({
      where:{
        id:body.departmentId}});

        if(!department){
          throw new BadRequestException('Department not found');
        }

        const field = this.fieldRepository.create({
          name: body.name,
          department
        });
    
        await this.fieldRepository.save(field);
        return field;
      }

}
