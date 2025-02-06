import { GenderType } from 'src/shared/enums';
import { DormitoryType } from 'src/shared/enums/dormitory-type.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';

@Entity()
export class Dormitory extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: GenderType })
  gender: GenderType;

  @Column({
    type: 'enum',
    enum: DormitoryType,
    default: DormitoryType.NonSNP,
  })
  dormitory_type: DormitoryType;

  @Column()
  number_of_student: number;

  @Column()
  number_of_room: number;
}
