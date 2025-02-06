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
@Entity()
export class Registration extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Building, (building) => building.registrations)
  building: Building;

  @OneToMany(() => Registration, (registration) => registration.departments)
  departments: Registration[];

  @Column('json')
  operationalTime: {
    open: string;
    closing: string;
  };

  @Column()
  type: string;

  @OneToOne(() => Field)
  field: Field;
}
