import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from "./faculty.entity";

@Entity('science_type')
export class ScienceType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // 'Natural Science' or 'Social Science'

  @OneToMany(() => Faculty, (faculty) => faculty.scienceType)
  faculties: Faculty[];
}
