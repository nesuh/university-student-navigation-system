import { Module } from "@nestjs/common";
import { BuildingController } from "./controller/building.controller";
import { DepartmentController } from "./controller/departement.controller";
import { NavigationPathsController } from "./controller/navigation-paths.controller";
import { BuildingService } from "./service/building.service";
import { NavigationPathService } from "./service/navigation-path.service";
import { DepartmentService } from "./service/department.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Building, Departments, NavigationPath } from "src/db/entities";
import { Room } from "src/db/entities/room.entity";
import { RoomController } from "./controller/room.controller";
import { RoomService } from "./service/room.service";


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Building,
      Departments,
      NavigationPath,
      Room
    ])
  ],  
  controllers: [BuildingController,DepartmentController,NavigationPathsController,RoomController],
  providers: [BuildingService,DepartmentService,NavigationPathService,RoomService],
  exports: [],
})
export class SNSModule {}