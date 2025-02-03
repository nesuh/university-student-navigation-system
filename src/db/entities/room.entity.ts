import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Building } from './building.entity';
import { Audit } from './audit.entity';
import { RoomType } from 'src/shared/enums';

@Entity()
export class Room extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Building)
  building: Building;

  @Column()
  floorNumber: number;

  @Column({ type: 'enum', enum: RoomType }) // Default RoomType
  roomType: RoomType;

  @CreateDateColumn()
  createdAt: Date;
}
