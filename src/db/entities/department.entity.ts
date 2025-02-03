import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { User } from './user.entity';
import { Building } from './building.entity';

@Entity()
export class Departments extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => User)
  headOfDepartment: User;

  @ManyToOne(() => Building)
  building: Building;
}
