import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./department.entity";
import { Audit } from "./audit.entity";

@Entity('field')
export class Field extends Audit{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Example: "Artificial Intelligence", "Cyber Security", "Finance" choose stream

  @ManyToOne(() => Department, (department) => department.fields)
  @JoinColumn({ name: 'department_id' })
  department: Department;
}
