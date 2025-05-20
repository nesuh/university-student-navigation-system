// College Entity
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ScienceType } from './science-type.entity';
import { Faculty } from './faculty.entity';
import { Department } from './department.entity';
import { Audit } from './audit.entity';

@Entity()
export class College extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ScienceType, (scienceType) => scienceType.colleges)
  @JoinColumn({ name: 'science_type_id' })
  scienceType: ScienceType;

  @OneToMany(() => Faculty, (facultie) => facultie.college)
  faculties: Faculty[];

  @OneToMany(() => Department, (department) => department.college)
  departments: Department[];
}