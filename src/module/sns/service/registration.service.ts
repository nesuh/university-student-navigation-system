import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Registration } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TEntityCrudService } from 'src/shared/service';

@Injectable()
export class RegistrationService extends TEntityCrudService<Registration> {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
  ) {
    super(registrationRepository);
  }
}
