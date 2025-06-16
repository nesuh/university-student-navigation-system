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
import { Department } from './department.entity';
import { Audit } from './audit.entity';
import { collegesEnum } from 'src/shared/enums';

@Entity()
export class College extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    type: 'enum',
    enum: collegesEnum,
  })
  name: collegesEnum;

  @ManyToOne(() => ScienceType, (scienceType) => scienceType.colleges)
  @JoinColumn({ name: 'science_type_id' })
  scienceType: ScienceType;

  @OneToMany(() => Department, (department) => department.college)
  departments: Department[];
}