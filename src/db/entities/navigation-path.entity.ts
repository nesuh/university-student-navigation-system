import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';

@Entity('navigation_path')
export class NavigationPath extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Building)
  fromBuilding: Building;

  @ManyToOne(() => Building)
  toBuilding: Building;

  @Column()
  distanceMeters: number;

  @Column({ type: 'jsonb' })
  pathCoordinates: Record<string, any>; // JSONB must be an object or array
}
