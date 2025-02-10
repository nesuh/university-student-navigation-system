import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';

@Entity('office')
export class Office extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'varchar', length: 20 })
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  floorNumber: number;

  @Column()
  roomNumber: number;

  @ManyToOne(() => Building, (building) => building.offices)
  building: Building;

  @Column('json')
  operationalTime: {
    morning: { open: string; closing: string };
    afternoon: { open: string; closing: string };
  };
}
