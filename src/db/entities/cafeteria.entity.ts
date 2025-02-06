import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Audit } from './audit.entity';
import { Users } from './users.entity';
import { Building } from './building.entity';
import { Room } from './room.entity';
import { CafeteriaType } from 'src/shared/enums/cafeteria_type.enum';

@Entity()
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

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'headOfCafeteriaId' })
  headOfCafeteria!: Users;

  @ManyToOne(() => Building)
  building: Building;

  @ManyToOne(() => Room)
  room: Room;

  @Column('json')
  operationalTime: {
    morning: { open: string; closing: string };
    afternoon: { open: string; closing: string };
    night: { open: string; closing: string };
  };
}
