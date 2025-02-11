import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';

@Entity('shopping')
export class Shopping extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique:true})
  shoppingName: string;

  @Column()
  capacity: number;
}
