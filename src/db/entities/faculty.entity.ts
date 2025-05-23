import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ScienceType } from "./science-type.entity";
import { Department } from "./department.entity";
import { Audit } from "./audit.entity";
import { Registration } from "./registration.entity";
import { College } from "./college.entity";

@Entity('faculty')
export class Faculty extends Audit{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  name: string; // Example: "Engineering", "Business", "Law"

  @ManyToOne(() => ScienceType, (scienceType) => scienceType.faculties)
  @JoinColumn({ name: 'science_type_id' })
  scienceType: ScienceType;

  @OneToMany(() => Department, (department) => department.faculty)
  departments: Department[];

  @OneToMany(() => Registration, (registration) => registration.faculty)
  registrations: Registration[];

   @ManyToOne(() => College, (college) => college.faculties)
  @JoinColumn({ name: 'college_id' })
  college: College;
}


