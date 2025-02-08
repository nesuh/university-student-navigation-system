import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from "./faculty.entity";
import { Audit } from "./audit.entity";

@Entity('science_type')
export class ScienceType extends Audit{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // 'Natural Science' or 'Social Science'

  @OneToMany(() => Faculty, (faculty) => faculty.scienceType)
  faculties: Faculty[];
}
