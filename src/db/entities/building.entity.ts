import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Audit } from './audit.entity';
import { BuildingType } from 'src/shared/enums';

@Entity()
export class Building extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: BuildingType,
  })
  type: BuildingType;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ type: 'text' })
  description: string;
}
