import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';
import { Faculty } from './faculty.entity';
import { Field } from './fields.entity';
import { Registration } from './registration.entity';
import { College } from './college.entity';

@Entity('department')
export class Department extends Audit {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({unique:true})
  name: string; // Example: "Computer Science", "Psychology", "Economics"

  @ManyToOne(() => Faculty, (faculty) => faculty.departments)
  @JoinColumn({ name: 'faculty_id' })
  faculty: Faculty;

  @OneToMany(() => Field, (field) => field.department)
  fields: Field[];

  @OneToMany(() => Registration, (registration) => registration.department)
  registrations: Registration[];

  @ManyToOne(() => College, (college) => college.departments)
  @JoinColumn({ name: 'college_id' })
  college: College;
}
