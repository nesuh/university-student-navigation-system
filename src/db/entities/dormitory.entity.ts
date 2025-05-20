import { GenderType } from 'src/shared/enums';
import { DormitoryType } from 'src/shared/enums/dormitory-type.enum';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { Building } from './building.entity';

@Entity('dormitory')
export class Dormitory extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(() => Building, (building) => building.dormitories)
  @JoinColumn({ name: 'building_id' })
  building: Building
  ;
}
