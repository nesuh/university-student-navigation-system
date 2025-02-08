import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';
import { Field } from './fields.entity';
import { RegistrationRole } from 'src/shared/enums/registration_role.enum';
@Entity('registration')
export class Registration extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: number;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum:RegistrationRole
  })
  role:RegistrationRole

  @ManyToOne(() => Building, (building) => building.registrations)
  building: Building;

  @OneToMany(() => Registration, (registration) => registration.departments)
  departments: Registration[];

  @Column('json')
  operationalTime: {
    morning: {
      opening: string;
      closing: string;
    },
    afternoon: {
      opening: string;
      closing: string;
    }
  };
}
