import { Module } from '@nestjs/common';
import { BuildingController } from './controller/building.controller';
import { DepartmentController } from './controller/departement.controller';
import { NavigationPathsController } from './controller/navigation-paths.controller';
import { BuildingService } from './service/building.service';
import { NavigationPathService } from './service/navigation-path.service';
import { DepartmentService } from './service/department.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Building,
  Cafeteria,
  Classes,
  Departments,
  Dormitory,
  Faculty,
  Field,
  Hall,
  Lab,
  NavigationPath,
  Office,
  Parking,
  Registration,
  ScienceType,
  Shopping,
} from 'src/db/entities';
import { Room } from 'src/db/entities/room.entity';
import { RoomController } from './controller/room.controller';
import { RoomService } from './service/room.service';
import { CafeteriaController } from './controller/cafeteria.controller';
import { ClassController } from './controller/class.controller';
import { DormitoryController } from './controller/dormitory.controller';
import { FieldController } from './controller/field.controller';
import { HallController } from './controller/hall.controller';
import { LabController } from './controller/lab.controller';
import { OfficeController } from './controller/office.controller';
import { ParkingController } from './controller/parking.controller';
import { RegistrationController } from './controller/registration.controller';
import { ShoppingController } from './controller/shopping.controller';
import { CafeteriaService } from './service/cafeteria.service';
import { ClassService } from './service/class.service';
import { DormitoryService } from './service/dormitory.service';
import { FieldService } from './service/field.service';
import { HallService } from './service/hall.service';
import { labService } from './service/lab.service';
import { OfficeService } from './service/office.service';
import { ParkingService } from './service/parking.service';
import { RegistrationService } from './service/registration.service';
import { ShoppingService } from './service/shopping.service';
import { FacultyController } from './controller/faculty.controller';
import { FacultyService } from './service/faculty.service';
import { ScienceTypeController } from './controller/science-type.controller';
import { ScienceTypeService } from './service/science-type.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Building,
      Departments,
      NavigationPath,
      Room,
      Dormitory,
      Cafeteria,
      Classes,
      Field,
      Hall,
      Lab,
      Office,
      Parking,
      Registration,
      Shopping,
      Faculty,
      ScienceType,

    ]),
  ],
  controllers: [
    BuildingController,
    DepartmentController,
    NavigationPathsController,
    RoomController,
    CafeteriaController,
    ClassController,
    DormitoryController,
    FieldController,
    HallController,
    LabController,
    OfficeController,
    ParkingController,
    RegistrationController,
    ShoppingController,
    FacultyController,
    ScienceTypeController
  ],
  providers: [
    BuildingService,
    DepartmentService,
    NavigationPathService,
    RoomService,
    CafeteriaService,
    ClassService,
    DormitoryService,
    FieldService,
    HallService,
    labService,
    OfficeService,
    ParkingService,
    RegistrationService,
    ShoppingService,
    FacultyService,
    ScienceTypeService
  ],
  exports: [],
})
export class SNSModule {}
