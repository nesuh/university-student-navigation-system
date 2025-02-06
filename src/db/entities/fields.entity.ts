import { FieldType } from 'src/shared/enums/field-type.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';

@Entity()
export class Field extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: FieldType })
  name: FieldType;
}
