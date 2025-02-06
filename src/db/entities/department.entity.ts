import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { Users } from './users.entity';
import { Building } from './building.entity';

@Entity()
export class Departments extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Users)
  headOfDepartment: Users;

  @ManyToOne(() => Building)
  building: Building;
}
