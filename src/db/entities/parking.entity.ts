import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';

@Entity('parking')
export class Parking extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  parkingName: string;

  @Column()
  capacity: number;
  
  @Column()  
  description!: string; 
}
