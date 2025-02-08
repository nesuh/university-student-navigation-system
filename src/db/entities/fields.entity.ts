import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Departments } from "./department.entity";

@Entity('field')
export class Field {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Example: "Artificial Intelligence", "Cyber Security", "Finance"

  @ManyToOne(() => Departments, (department) => department.fields)
  @JoinColumn({ name: 'department_id' })
  department: Departments;
}
