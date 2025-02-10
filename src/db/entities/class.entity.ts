import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Building } from './building.entity';
import { Audit } from './audit.entity';
@Entity('classes')
export class Classes extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Building, (building) => building.classes)
  @JoinColumn({ name: 'buildingId' })
  building: Building;

  @Column()
  floorNumber: number;

  @Column()
  roomType: string;

  @Column()
  roomNumber:number
}
