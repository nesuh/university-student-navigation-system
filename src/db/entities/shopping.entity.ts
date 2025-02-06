import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';

@Entity()
export class Shopping extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  shoppingName: string;

  @Column()
  capacity: number;
}
