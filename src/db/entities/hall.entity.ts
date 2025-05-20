import { Audit } from './audit.entity';
import { Users } from './users.entity';
import { Building } from './building.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hall')
export class Hall extends Audit {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Building)
  building: Building;

  @Column()
  capacity: number;

  @Column()
  description!: string;
}
