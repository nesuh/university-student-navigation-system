import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';

@Entity('shopping')
export class Shopping extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  shoppingName: string;

  @Column()
  capacity: number;

  @Column()
  description!: string;
}
