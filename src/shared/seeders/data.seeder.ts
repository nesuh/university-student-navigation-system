import { Injectable } from "@nestjs/common";
import {
  Building,
  Cafeteria,
  Classes,
  College,
  Department,
  Dormitory,
  Hall,
  Lab,
  Library,
  Office,
  Parking,
  Registration,
  ScienceType,
  Shopping,
  Users,
} from "src/db/entities";
import { DataSource } from "typeorm";
import { runSeeder, Seeder } from "typeorm-extension";
import dataSource from "../typeorm/typeorm-config-helper";
import {
  adminstrativeUnits,
  buildings,
  cafeterias,
  classes,
  colleges,
  departments,
  dormitories,
  halls,
  labs,
  libraries,
  offices,
  parkings,
  registrations,
  scienceTypes,
  shoppings,
  users,
} from "./seed-data";
import * as bcrypt from "bcrypt";
import { AdministrativeUnit } from "src/db/entities/adminstrative-unit.entity";

@Injectable()
export class DataSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await dataSource.initialize();

    const userRepository = dataSource.getRepository(Users);
    const buildingRepository = dataSource.getRepository(Building);
    const cafeteriaRepository = dataSource.getRepository(Cafeteria);
    const collegeRepository = dataSource.getRepository(College);
    const classesRepository = dataSource.getRepository(Classes);
    const departmentRepository = dataSource.getRepository(Department);
    const scienceTypeRepository = dataSource.getRepository(ScienceType);
    const hallRepository = dataSource.getRepository(Hall);
    const labRepository = dataSource.getRepository(Lab);
    const officeRepository = dataSource.getRepository(Office);
    const parkingRepository = dataSource.getRepository(Parking);
    const registrationRepository = dataSource.getRepository(Registration);
    const shoppingRepository = dataSource.getRepository(Shopping);
    const dormitoryRepository = dataSource.getRepository(Dormitory);
    const admisntrativeUnitRepository = dataSource.getRepository(AdministrativeUnit);
    const libraryRepository = dataSource.getRepository(Library);

    try {
      // Seed Users
      console.log("Seeding Users...");
      for (const user of users) {
        const userExists = await userRepository.findOne({ where: { id: user.id } });
        if (userExists) {
          console.warn(`User already exists: ${user.id}`);
          continue;
        }
        user.password = this.encryptString(user.password);
        await userRepository.save(userRepository.create(user));
      }

      // Seed Buildings
      console.log("Seeding Buildings...");
      for (const building of buildings) {
        const exists = await buildingRepository.findOne({ where: { id: building.id } });
        if (exists) {
          console.warn(`Building already exists: ${building.id}`);
          continue;
        }
        await buildingRepository.save(buildingRepository.create(building));
      }

      // Seed Parkings
      console.log("Seeding Parkings...");
      for (const parking of parkings) {
        const exists = await parkingRepository.findOne({ where: { id: parking.id } });
        if (exists) {
          console.warn(`Parking already exists: ${parking.id}`);
          continue;
        }
        await parkingRepository.save(parkingRepository.create(parking));
      }

      // Seed Science Types
      console.log("Seeding Science Types...");
      for (const scienceType of scienceTypes) {
        const exists = await scienceTypeRepository.findOne({ where: { id: scienceType.id } });
        if (exists) {
          console.warn(`Science Type already exists: ${scienceType.id}`);
          continue;
        }
        await scienceTypeRepository.save(scienceTypeRepository.create(scienceType));
      }

      // Seed Colleges
      console.log("Seeding Colleges...");
      for (const college of colleges) {
        const exists = await collegeRepository.findOne({ where: { id: college.id } });
        if (exists) {
          console.warn(`College already exists: ${college.id}`);
          continue;
        }
        await collegeRepository.save(collegeRepository.create(college));
      }

console.log("Seeding Admisntrative Units...");
for (const admisntrativeUnit of adminstrativeUnits) {
  const exists = await admisntrativeUnitRepository.findOne({ where: { id: admisntrativeUnit.id } });
  if (exists) {
    console.warn(`Admisntrative Unit already exists: ${admisntrativeUnit.id}`);
    continue;
  }
  await admisntrativeUnitRepository.save(admisntrativeUnitRepository.create(admisntrativeUnit));
}         

      // Seed Departments
      console.log("Seeding Departments...");
      for (const department of departments) {
        const exists = await departmentRepository.findOne({ where: { id: department.id } });
        if (exists) {
          console.warn(`Department already exists: ${department.id}`);
          continue;
        }
        await departmentRepository.save(departmentRepository.create(department));
      }

      // Seed Cafeterias
      console.log("Seeding Cafeterias...");
      for (const cafeteria of cafeterias) {
        const exists = await cafeteriaRepository.findOne({ where: { id: cafeteria.id } });
        if (exists) {
          console.warn(`Cafeteria already exists: ${cafeteria.id}`);
          continue;
        }
        await cafeteriaRepository.save(cafeteriaRepository.create(cafeteria));
      }

      // Seed Shoppings
      console.log("Seeding Shoppings...");
      for (const shopping of shoppings) {
        const exists = await shoppingRepository.findOne({ where: { id: shopping.id } });
        if (exists) {
          console.warn(`Shopping already exists: ${shopping.id}`);
          continue;
        }
        await shoppingRepository.save(shoppingRepository.create(shopping));
      }

      // Seed Classes
      console.log("Seeding Classes...");
      for (const classRoom of classes) {
        const exists = await classesRepository.findOne({ where: { id: classRoom.id } });
        if (exists) {
          console.warn(`Class Room already exists: ${classRoom.id}`);
          continue;
        }
        await classesRepository.save(classesRepository.create(classRoom));
      }

      // Seed Dormitories
      console.log("Seeding Dormitories...");
      for (const dormitory of dormitories) {
        const exists = await dormitoryRepository.findOne({ where: { id: dormitory.id } });
        if (exists) {
          console.warn(`Dormitory already exists: ${dormitory.id}`);
          continue;
        }
        await dormitoryRepository.save(dormitoryRepository.create(dormitory));
      }

      // Seed Halls
      console.log("Seeding Halls...");
      for (const hall of halls) {
        const exists = await hallRepository.findOne({ where: { id: hall.id } });
        if (exists) {
          console.warn(`Hall already exists: ${hall.id}`);
          continue;
        }
        await hallRepository.save(hallRepository.create(hall));
      }

      // Seed Labs
      console.log("Seeding Labs...");
      for (const lab of labs) {
        const exists = await labRepository.findOne({ where: { id: lab.id } });
        if (exists) {
          console.warn(`Lab already exists: ${lab.id}`);
          continue;
        }
        await labRepository.save(labRepository.create(lab));
      }

      // Seed Offices
      console.log("Seeding Offices...");
      for (const office of offices) {
        const exists = await officeRepository.findOne({ where: { id: office.id } });
        if (exists) {
          console.warn(`Office already exists: ${office.id}`);
          continue;
        }
        await officeRepository.save(officeRepository.create(office));
      }

      // Seed Registrations
      console.log("Seeding Registrations...");
      for (const registration of registrations) {
        const exists = await registrationRepository.findOne({ where: { id: registration.id } });
        if (exists) {
          console.warn(`Registration already exists: ${registration.id}`);
          continue;
        }
        await registrationRepository.save(registrationRepository.create(registration));
      }
      //seed Library
      console.log("Seeding Library...");
      for (const library of libraries) {
        const exists = await libraryRepository.findOne({ where: { id: library.id } });
        if (exists) {
          console.warn(`Library already exists: ${library.id}`);
          continue;
        }
        await libraryRepository.save(libraryRepository.create(library));
      } 

      console.log("✅ All data seeded successfully.");
    } catch (error) {
      console.error("❌ Seeder Error:", error);
      throw error;
    } finally {
      await dataSource.destroy();
    }
  }

  private encryptString(password: string): string {
    if (!password || typeof password !== "string") {
      throw new Error("Invalid password input.");
    }

    try {
      const salt = bcrypt.genSaltSync(12);
      return bcrypt.hashSync(password, salt);
    } catch (error) {
      console.error("Password hashing failed:", error);
      throw new Error("Failed to hash password.");
    }
  }
}

// Run the seeder
(async () => {
  await runSeeder(dataSource, DataSeeder);
})();
