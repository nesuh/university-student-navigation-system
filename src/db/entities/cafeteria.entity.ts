import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';
import { CafeteriaType } from 'src/shared/enums/cafeteria_type.enum';

@Entity('cafeteria')
export class Cafeteria extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: CafeteriaType,
    default: CafeteriaType.Government,
  })
  type: CafeteriaType;

  @Column()
  capacity: number;

  @Column('json')
  operationalTime: {
    morning: { open: string; closing: string };
    afternoon: { open: string; closing: string };
    night: { open: string; closing: string };
  };

  @Column()
  description!: string;

  @OneToOne(() => Building, (building) => building.cafeteria)
  @JoinColumn()
  building: Building;
}
