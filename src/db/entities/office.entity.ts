import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';

@Entity('office')
export class Office extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Building)
  building: Building;
}
