import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { AdministrativeUnitEnum } from 'src/shared/enums/adminstrative-unit.enum';

@Entity('administrative_unit')
export class AdministrativeUnit extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    type: 'enum',
    enum: AdministrativeUnitEnum,
  })
  name: AdministrativeUnitEnum;

}
