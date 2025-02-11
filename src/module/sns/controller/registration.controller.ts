import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRegistrationDto, UpdateRegistrationDto } from '../dtos';
import { ApiTags } from '@nestjs/swagger';
import { Registration } from 'src/db/entities';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController, TExtraCrudController } from 'src/shared/controller';
import { RegistrationService } from '../service/registration.service';

const options: ExtraCrudOptions = {
  entityIdName: 'registrationId',
  createDto: CreateRegistrationDto,
  updateDto: UpdateRegistrationDto,
};

@Controller('registration')
@ApiTags('Registration')
export class RegistrationController extends TExtraCrudController<Registration>(
  options,
) {
  constructor(private readonly registrationService: RegistrationService) {
    super(registrationService);
  }

  @Post()
  async registerRegistration(@Body() body: CreateRegistrationDto) {
    return await this.registrationService.registerRegistration(body);
  } 

   @Get('list/:parentId')
  async findAll(
    @Param('parentId') parentId: string
  ) {
    return await this.registrationService.findAll(parentId);
  }
}
