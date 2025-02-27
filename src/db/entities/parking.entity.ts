import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';

@Entity('parking')
export class Parking extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique:true})
  parkingName: string;

  @Column()
  capacity: number;
}
