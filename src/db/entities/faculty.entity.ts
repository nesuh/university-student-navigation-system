import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ScienceType } from "./science-type.entity";
import { Departments } from "./department.entity";

@Entity('faculty')
export class Faculty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Example: "Engineering", "Business", "Law"

  @ManyToOne(() => ScienceType, (scienceType) => scienceType.faculties)
  @JoinColumn({ name: 'science_type_id' })
  scienceType: ScienceType;

  @OneToMany(() => Departments, (department) => department.faculty)
  departments: Departments[];
}
