import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Audit } from './audit.entity';
import { BuildingType } from 'src/shared/enums';
import { Classes } from './class.entity';
import { Registration } from './registration.entity';
import { Cafeteria } from './cafeteria.entity';
import { Office } from './office.entity';
import { Dormitory } from './dormitory.entity';
import { Lab } from './lab.entity';

@Entity('building')
export class Building extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
  
  @Column(
    // {unique:true}
  )
  block: number;
  
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
  description!: string;

  @OneToMany(() => Classes, (classRoom) => classRoom.building)
  classes: Classes[];

  @OneToMany(() => Registration, (registration) => registration.building)
  registrations: Registration[];

  @OneToOne(() => Cafeteria, (cafeteria) => cafeteria.building)
  @JoinColumn()
  cafeteria: Cafeteria;
 
  @OneToMany(() => Office, (office) => office.building)
  offices: Office[];

  @OneToMany(() => Dormitory, (dormitory) => dormitory.building) 
  dormitories: Dormitory[];

  @OneToMany(() => Lab, (lab) => lab.building)
  labs: Lab[];
  
}
