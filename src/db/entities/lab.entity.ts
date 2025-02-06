import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Audit } from './audit.entity';
import { Users } from './users.entity';
import { Building } from './building.entity';
import { Room } from './room.entity';

@Entity()
export class Lab extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Users)
  headOfLab: Users;

  @ManyToOne(() => Building)
  building: Building;

  @ManyToOne(() => Room)
  room: Room;

  operationalTime: {
    open: string;
    closing: string;
  };
}
