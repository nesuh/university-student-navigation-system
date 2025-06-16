import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Audit } from "./audit.entity";
import { Registration } from "./registration.entity";
import { College } from "./college.entity";

@Entity('science_type')
export class ScienceType extends Audit{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  scienceTypeName: string; // 'Natural Science' or 'Social Science'

   @OneToMany(() => Registration, (registration) => registration.scienceType)
  registrations: Registration[];

  @OneToMany(() => College, (college) => college.scienceType)
  colleges: College[];
}