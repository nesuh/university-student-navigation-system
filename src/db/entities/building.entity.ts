import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Audit } from './audit.entity';
import { BuildingType } from 'src/shared/enums';
import { Classes } from './class.entity';
import { Registration } from './registration.entity';

@Entity()
export class Building extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: BuildingType,
  })
  type: BuildingType;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Classes, (classRoom) => classRoom.building)
  classes: Classes[];

  @OneToMany(() => Registration, (registration) => registration.building)
  registrations: Registration[];

  // @OneToMany(() => Cafeteria, (cafeteria) => cafeteria.building)
  // cafeterias: Cafeteria[]; for these dmu university these relation is not usefull
}
