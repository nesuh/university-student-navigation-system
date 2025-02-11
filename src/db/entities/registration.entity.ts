import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';
import { Faculty } from './faculty.entity';
import { Department } from './department.entity';
import { ScienceType } from './science-type.entity';
@Entity('registration')
export class Registration extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @ManyToOne(() => Faculty, (faculty) => faculty.registrations)
  @JoinColumn({ name: 'faculty_id' })
  faculty: Faculty;

  @ManyToOne(() => ScienceType, (scienceType) => scienceType.registrations)
  @JoinColumn({ name: 'science_type_id' })
  scienceType: ScienceType;

}
