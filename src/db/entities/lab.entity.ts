import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';

@Entity('lab')
export class Lab extends Audit {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({ unique: true })
  name: string;
  @Column()
  headOfLab: string ;

  @ManyToOne(() => Building)
  building: Building;

   @Column()
   floorNumber: number;

   @Column()
   roomNumber: number;

@Column({ type: 'jsonb' })
operationalTime: {
  morning: { open: string; closing: string };
  afternoon: { open: string; closing: string };
  night: { open: string; closing: string };
};

}
