import { MigrationInterface, QueryRunner } from "typeorm";

export class Init011750071213191 implements MigrationInterface {
    name = 'Init011750071213191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('User', 'Admin')`);
        await queryRunner.query(`CREATE TABLE "users" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phoneNumber" character varying(23) NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'Admin', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shopping" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "shoppingName" character varying NOT NULL, "capacity" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_fda6b96a010511f6f5d60cb045f" UNIQUE ("shoppingName"), CONSTRAINT "PK_7e310c863e4d0cc737aee7618fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classes" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomType" character varying NOT NULL, "roomNumber" integer NOT NULL, "buildingId" integer, CONSTRAINT "UQ_1f3940af28a76098f31004f03ca" UNIQUE ("name"), CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."cafeteria_type_enum" AS ENUM('Government', 'InPerson')`);
        await queryRunner.query(`CREATE TABLE "cafeteria" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" "public"."cafeteria_type_enum" NOT NULL DEFAULT 'Government', "capacity" integer NOT NULL, "operationalTime" jsonb NOT NULL, "description" character varying NOT NULL, "buildingId" integer, CONSTRAINT "UQ_703418851dbf0ffef09e255b9a1" UNIQUE ("name"), CONSTRAINT "REL_0157774276e2518ce37b0cdb25" UNIQUE ("buildingId"), CONSTRAINT "PK_3b5c7abe2262d7c78e81c37e0c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "office" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "fullName" character varying NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomNumber" integer NOT NULL, "operationalTime" jsonb NOT NULL, "buildingId" integer, CONSTRAINT "UQ_635695bfd9bb8ce0a653efb244e" UNIQUE ("email"), CONSTRAINT "PK_200185316ba169fda17e3b6ba00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."dormitory_gender_enum" AS ENUM('Female', 'Male')`);
        await queryRunner.query(`CREATE TYPE "public"."dormitory_dormitory_type_enum" AS ENUM('SpecialNeedPerson', 'NonSpecialNeedPerson')`);
        await queryRunner.query(`CREATE TABLE "dormitory" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "gender" "public"."dormitory_gender_enum" NOT NULL, "dormitory_type" "public"."dormitory_dormitory_type_enum" NOT NULL DEFAULT 'NonSpecialNeedPerson', "number_of_student" integer NOT NULL, "number_of_room" integer NOT NULL, "building_id" integer, CONSTRAINT "PK_17483b11457c23cad87f30ff31c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lab" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "headOfLab" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomNumber" integer NOT NULL, "operationalTime" jsonb NOT NULL, "buildingId" integer, CONSTRAINT "UQ_cca07dec2da5b734af2b81f5a3e" UNIQUE ("name"), CONSTRAINT "PK_5575ab9332d71474261beb799a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."building_type_enum" AS ENUM('single', 'rectangle')`);
        await queryRunner.query(`CREATE TABLE "building" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "block" integer NOT NULL, "type" "public"."building_type_enum" NOT NULL, "latitude" numeric(10,6) NOT NULL, "longitude" numeric(10,6) NOT NULL, "description" text NOT NULL, "cafeteriaId" integer, CONSTRAINT "UQ_57655499fbc0671a32732e63008" UNIQUE ("name"), CONSTRAINT "REL_e95d3283470d6a04e6ccd016f0" UNIQUE ("cafeteriaId"), CONSTRAINT "PK_bbfaf6c11f141a22d2ab105ee5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."college_name_enum" AS ENUM('AgricultureCollege', 'CollegeOfBusinessAndEconomics', 'HealthCollege', 'LandAdministrationCollege', 'LawSchool', 'NaturalScienceCollege', 'CollegeOfEducationAndBehavioralStudies', 'SocialScienceCollege', 'TechnologyOfInstitution')`);
        await queryRunner.query(`CREATE TABLE "college" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" "public"."college_name_enum" NOT NULL, "science_type_id" integer, CONSTRAINT "UQ_52bce0385776c662605a10e9c09" UNIQUE ("name"), CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "college_id" integer, CONSTRAINT "UQ_471da4b90e96c1ebe0af221e07b" UNIQUE ("name"), CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "registration" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomNumber" integer NOT NULL, "building_id" integer, "department_id" integer, "science_type_id" integer, CONSTRAINT "UQ_53ef155483873b0c132e6edbdb8" UNIQUE ("phoneNumber"), CONSTRAINT "UQ_ce657140898dbd9002ceaf2a13c" UNIQUE ("email"), CONSTRAINT "PK_cb23dc9d28df8801b15e9e2b8d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "science_type" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "scienceTypeName" character varying NOT NULL, CONSTRAINT "UQ_4dd4761ce7615ca07ff6e347542" UNIQUE ("scienceTypeName"), CONSTRAINT "PK_db902e40b47e6168c2358976eb5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "parkingName" character varying NOT NULL, "capacity" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_cd73a72999bcebcfc6004f533c4" UNIQUE ("parkingName"), CONSTRAINT "PK_d611d86b1d39963d048b05976aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "navigation_path" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "distanceMeters" integer NOT NULL, "pathCoordinates" jsonb NOT NULL, "fromBuildingId" integer, "toBuildingId" integer, CONSTRAINT "PK_27cecd06791bc0445e26ef73b29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hall" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "capacity" integer NOT NULL, "description" character varying NOT NULL, "buildingId" integer, CONSTRAINT "UQ_1b1c3e87ba46f8f91c666a0c963" UNIQUE ("name"), CONSTRAINT "PK_4b7ec43f24e82084474569abec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."administrative_unit_name_enum" AS ENUM('Human Resource Management Directorate', 'Academic Executive', 'Academic Vice President', 'Administration Vice President', 'Audit', 'Research and Community Service', 'Finance and Budget Administrator', 'Campus Security and Safety', 'Gender and HIV Unit', 'Campus Beauty and Cleanliness', 'Procurement Administrator', 'Information and Communication Technology', 'Transformation and Good Governance', 'Library', 'Community Radio', 'Property and General Services', 'Plan, Attendance, and Evaluation', 'Postgraduate School', 'President Legal Advisor', 'Project Legal Advisor', 'Registrar', 'Student Services and Discipline', 'Maintenance Plant', 'Proctore')`);
        await queryRunner.query(`CREATE TABLE "administrative_unit" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" "public"."administrative_unit_name_enum" NOT NULL, CONSTRAINT "UQ_db244f85a61c38434ea8882664d" UNIQUE ("name"), CONSTRAINT "PK_b51e6902d8f65da24c6fbd9e672" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lab" DROP COLUMN "headOfLab"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP COLUMN "floorNumber"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP COLUMN "roomNumber"`);
        await queryRunner.query(`ALTER TABLE "lab" ADD "headOfLab" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lab" ADD "floorNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lab" ADD "roomNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lab" ADD "headOfLibrary" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lab" ADD "capacity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_aef6cd5cc8a13d76554cedd8584" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cafeteria" ADD CONSTRAINT "FK_0157774276e2518ce37b0cdb252" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "office" ADD CONSTRAINT "FK_8f4199a843353e6968f3f841d60" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dormitory" ADD CONSTRAINT "FK_fa1b4aec5cb3b73c0f7312dc7f1" FOREIGN KEY ("building_id") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lab" ADD CONSTRAINT "FK_d236585a74655bc406648616bd4" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "building" ADD CONSTRAINT "FK_e95d3283470d6a04e6ccd016f07" FOREIGN KEY ("cafeteriaId") REFERENCES "cafeteria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "college" ADD CONSTRAINT "FK_a47cfccce2534ecc133238acfc9" FOREIGN KEY ("science_type_id") REFERENCES "science_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_7dcfa5a8a2a92bbbd2f2ffadc22" FOREIGN KEY ("college_id") REFERENCES "college"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_6058f36ca5f6be9677a7cae4fb4" FOREIGN KEY ("building_id") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_0bdac67ad9a7b93159c6206c87d" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_510101ab11eb36d0e2b64c99266" FOREIGN KEY ("science_type_id") REFERENCES "science_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "navigation_path" ADD CONSTRAINT "FK_72137230a3ec17c9a6bee3ef0cd" FOREIGN KEY ("fromBuildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "navigation_path" ADD CONSTRAINT "FK_082f80a15710817cf132be9b12e" FOREIGN KEY ("toBuildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "hall" ADD CONSTRAINT "FK_b3ed2810fe4552b79958e938768" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hall" DROP CONSTRAINT "FK_b3ed2810fe4552b79958e938768"`);
        await queryRunner.query(`ALTER TABLE "navigation_path" DROP CONSTRAINT "FK_082f80a15710817cf132be9b12e"`);
        await queryRunner.query(`ALTER TABLE "navigation_path" DROP CONSTRAINT "FK_72137230a3ec17c9a6bee3ef0cd"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_510101ab11eb36d0e2b64c99266"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_0bdac67ad9a7b93159c6206c87d"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_6058f36ca5f6be9677a7cae4fb4"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_7dcfa5a8a2a92bbbd2f2ffadc22"`);
        await queryRunner.query(`ALTER TABLE "college" DROP CONSTRAINT "FK_a47cfccce2534ecc133238acfc9"`);
        await queryRunner.query(`ALTER TABLE "building" DROP CONSTRAINT "FK_e95d3283470d6a04e6ccd016f07"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP CONSTRAINT "FK_d236585a74655bc406648616bd4"`);
        await queryRunner.query(`ALTER TABLE "dormitory" DROP CONSTRAINT "FK_fa1b4aec5cb3b73c0f7312dc7f1"`);
        await queryRunner.query(`ALTER TABLE "office" DROP CONSTRAINT "FK_8f4199a843353e6968f3f841d60"`);
        await queryRunner.query(`ALTER TABLE "cafeteria" DROP CONSTRAINT "FK_0157774276e2518ce37b0cdb252"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_aef6cd5cc8a13d76554cedd8584"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP COLUMN "headOfLibrary"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP COLUMN "roomNumber"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP COLUMN "floorNumber"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP COLUMN "headOfLab"`);
        await queryRunner.query(`ALTER TABLE "lab" ADD "roomNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lab" ADD "floorNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lab" ADD "headOfLab" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "administrative_unit"`);
        await queryRunner.query(`DROP TYPE "public"."administrative_unit_name_enum"`);
        await queryRunner.query(`DROP TABLE "hall"`);
        await queryRunner.query(`DROP TABLE "navigation_path"`);
        await queryRunner.query(`DROP TABLE "parking"`);
        await queryRunner.query(`DROP TABLE "science_type"`);
        await queryRunner.query(`DROP TABLE "registration"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "college"`);
        await queryRunner.query(`DROP TYPE "public"."college_name_enum"`);
        await queryRunner.query(`DROP TABLE "building"`);
        await queryRunner.query(`DROP TYPE "public"."building_type_enum"`);
        await queryRunner.query(`DROP TABLE "lab"`);
        await queryRunner.query(`DROP TABLE "dormitory"`);
        await queryRunner.query(`DROP TYPE "public"."dormitory_dormitory_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."dormitory_gender_enum"`);
        await queryRunner.query(`DROP TABLE "office"`);
        await queryRunner.query(`DROP TABLE "cafeteria"`);
        await queryRunner.query(`DROP TYPE "public"."cafeteria_type_enum"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "shopping"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }

}
