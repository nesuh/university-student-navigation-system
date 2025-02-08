import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { Users } from './users.entity';
import { Building } from './building.entity';
import { Faculty } from './faculty.entity';
import { Field } from './fields.entity';

@Entity('departments')
export class Departments extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Example: "Computer Science", "Psychology", "Economics"

  @ManyToOne(() => Faculty, (faculty) => faculty.departments)
  @JoinColumn({ name: 'faculty_id' })
  faculty: Faculty;

  @OneToMany(() => Field, (field) => field.department)
  fields: Field[];

  @ManyToOne(() => Building)
  building: Building;
}
