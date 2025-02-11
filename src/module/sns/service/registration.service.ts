import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Registration } from 'src/db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { TExtraCrudService } from 'src/shared/service';

@Injectable()
export class RegistrationService extends TExtraCrudService<Registration> {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
  ) {
    super(registrationRepository,'id');
  }
}
