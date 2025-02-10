import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Audit } from './audit.entity';
import { UserRole } from 'src/shared/enums';
@Entity('users')
export class Users extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({type:'varchar',length:23})
  phoneNumber: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.Admin })
  role: UserRole;

}
