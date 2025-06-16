import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';

@Entity('Library')
export class Library extends Audit {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({ unique: true })
  name: string;

  @Column()
  headOfLibrary: string ;

  @ManyToOne(() => Building)
  building: Building;
  
  @Column()
  capacity:number

@Column({ type: 'jsonb' })
operationalTime: {
  morning: { open: string; closing: string };
  afternoon: { open: string; closing: string };
  night: { open: string; closing: string };
};

}
