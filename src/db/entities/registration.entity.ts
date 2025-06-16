import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';
import { Department } from './department.entity';
import { ScienceType } from './science-type.entity';
@Entity('registration')
export class Registration extends Audit {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;

  @Column({ type: 'varchar', length: 20 ,unique:true})
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  floorNumber: number;

  @Column()
  roomNumber: number;

  @ManyToOne(() => Building, (building) => building.registrations)
  @JoinColumn({ name: 'building_id' })
  building: Building;

  @ManyToOne(() => Department, (department) => department.registrations)
  @JoinColumn({ name: 'department_id' })
  department: Department;                                                                              

  @ManyToOne(() => ScienceType, (scienceType) => scienceType.registrations)
  @JoinColumn({ name: 'science_type_id' })
  scienceType: ScienceType;

}
