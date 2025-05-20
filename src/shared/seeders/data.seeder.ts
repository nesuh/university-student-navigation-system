import { Injectable } from "@nestjs/common";
import {
  Building,
  Cafeteria,
  Classes,
  College,
  Department,
  Dormitory,
  Faculty,
  Hall,
  Lab,
  Office,
  Parking,
  Registration,
  ScienceType,
  Shopping,
  Users,
} from "src/db/entities";
import { DataSource, Repository } from "typeorm";
import { runSeeder, Seeder } from "typeorm-extension";
import dataSource from "../typeorm/typeorm-config-helper";
import {
  buildings,
  cafeterias,
  classes,
  colleges,
  departments,
  dormitories,
  faculties,
  halls,
  labs,
  offices,
  parkings,
  registrations,
  scienceTypes,
  shoppings,
  users,
} from "./seed-data";
import * as bcrypt from "bcrypt";

@Injectable()
export class DataSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await dataSource.initialize();

    const userRepository: Repository<Users> = dataSource.getRepository(Users);
    const buildingRepository: Repository<Building> = dataSource.getRepository(Building);
    const cafeteriaRepository: Repository<Cafeteria> = dataSource.getRepository(Cafeteria);
    const collegeRepository: Repository<College> = dataSource.getRepository(College);
    const classesRepository: Repository<Classes> = dataSource.getRepository(Classes);
    const facultyRepository: Repository<Faculty> = dataSource.getRepository(Faculty);
    const departmentRepository: Repository<Department> = dataSource.getRepository(Department);
    const scienceTypeRepository: Repository<ScienceType> = dataSource.getRepository(ScienceType);
    const hallRepository: Repository<Hall> = dataSource.getRepository(Hall);
    const labRepository: Repository<Lab> = dataSource.getRepository(Lab);
    const officeRepository: Repository<Office> = dataSource.getRepository(Office);
    const parkingRepository: Repository<Parking> = dataSource.getRepository(Parking);
    const registrationRepository: Repository<Registration> = dataSource.getRepository(Registration);
    const shoppingRepository: Repository<Shopping> = dataSource.getRepository(Shopping);
    const dormitoryRepository: Repository<Dormitory> = dataSource.getRepository(Dormitory);

    try {
      // Seed Users
      console.log("Seeding Users...");
      for (const user of users) {
        const userExists = await userRepository.findOne({ where: { id: user.id } });
        if (userExists) {
          console.warn(`User already exists: ${user.id}`);
          continue;
        }
        user.password = this.encryptString(user.password); // Hash password
        const userData = userRepository.create(user);
        await userRepository.save(userData);
      }

console.log("Seeding Buildings...");  
await buildingRepository.upsert(buildings, {
  skipUpdateIfNoValuesChanged: true,
  conflictPaths: ["id"],
});
      // Seed Parkings
      console.log("Seeding Parkings...");
      await parkingRepository.upsert(parkings, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });
      // Seed Science Types
      console.log("Seeding Science Types...");
      await scienceTypeRepository.upsert(scienceTypes, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });

  // Seed College
      console.log("Seeding Colleges...");
      await collegeRepository.upsert(colleges, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });
      // Seed Faculties
      console.log("Seeding Faculties...");
      await facultyRepository.upsert(faculties, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });

      // Seed Departments
      console.log("Seeding Departments...");
      await departmentRepository.upsert(departments, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });  // Seed Cafeterias
      console.log("Seeding Cafeterias...");
      await cafeteriaRepository.upsert(cafeterias, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });

      // Seed Shoppings
      console.log("Seeding Shoppings...");
      await shoppingRepository.upsert(shoppings, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });
//////////////////////////error
         // Seed Classes
      console.log("Seeding Classes...");
      await classesRepository.upsert(classes, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });
      // Seed Dormitories
      console.log("Seeding Dormitories...");
      await dormitoryRepository.upsert(dormitories, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });
 // Seed Halls
      console.log("Seeding Halls...");
      await hallRepository.upsert(halls, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });
      // Seed Labs
      console.log("Seeding Labs...");
      await labRepository.upsert(labs, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });
    // Seed Offices
      console.log("Seeding Offices...");
      await officeRepository.upsert(offices, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });
          // Seed Registrations
      console.log("Seeding Registrations...");
      await registrationRepository.upsert(registrations, {
        skipUpdateIfNoValuesChanged: true,
        conflictPaths: ["id"],
      });

    

      console.log("✅ All data seeded successfully.");
    } catch (error) {
      console.error("❌ Seeder Error:", error);
      throw error;
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
