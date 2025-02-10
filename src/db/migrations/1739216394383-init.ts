import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1739216394383 implements MigrationInterface {
    name = 'Init1739216394383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('User', 'Admin')`);
        await queryRunner.query(`CREATE TABLE "users" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phoneNumber" character varying(23) NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'Admin', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "field" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "department_id" uuid, CONSTRAINT "PK_39379bba786d7a75226b358f81e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classes" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomType" character varying NOT NULL, "roomNumber" integer NOT NULL, "buildingId" uuid, CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."cafeteria_type_enum" AS ENUM('Government', 'InPerson')`);
        await queryRunner.query(`CREATE TABLE "cafeteria" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" "public"."cafeteria_type_enum" NOT NULL DEFAULT 'Government', "capacity" integer NOT NULL, "operationalTime" json NOT NULL, "description" character varying NOT NULL, "buildingId" uuid, CONSTRAINT "UQ_703418851dbf0ffef09e255b9a1" UNIQUE ("name"), CONSTRAINT "REL_0157774276e2518ce37b0cdb25" UNIQUE ("buildingId"), CONSTRAINT "PK_3b5c7abe2262d7c78e81c37e0c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "office" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomNumber" integer NOT NULL, "operationalTime" json NOT NULL, "buildingId" uuid, CONSTRAINT "UQ_635695bfd9bb8ce0a653efb244e" UNIQUE ("email"), CONSTRAINT "PK_200185316ba169fda17e3b6ba00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."building_type_enum" AS ENUM('single', 'rectangle')`);
        await queryRunner.query(`CREATE TABLE "building" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" "public"."building_type_enum" NOT NULL, "latitude" numeric(10,6) NOT NULL, "longitude" numeric(10,6) NOT NULL, "description" text NOT NULL, "cafeteriaId" uuid, CONSTRAINT "UQ_57655499fbc0671a32732e63008" UNIQUE ("name"), CONSTRAINT "REL_e95d3283470d6a04e6ccd016f0" UNIQUE ("cafeteriaId"), CONSTRAINT "PK_bbfaf6c11f141a22d2ab105ee5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "registration" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "phoneNumber" character varying(20) NOT NULL, "email" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomNumber" integer NOT NULL, "building_id" uuid, "department_id" uuid, "faculty_id" uuid, "science_type_id" uuid, CONSTRAINT "UQ_ce657140898dbd9002ceaf2a13c" UNIQUE ("email"), CONSTRAINT "PK_cb23dc9d28df8801b15e9e2b8d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "faculty_id" uuid, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "faculty" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "science_type_id" uuid, CONSTRAINT "PK_635ca3484f9c747b6635a494ad9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "science_type" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_db902e40b47e6168c2358976eb5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shopping" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "shoppingName" character varying NOT NULL, "capacity" integer NOT NULL, CONSTRAINT "PK_7e310c863e4d0cc737aee7618fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "parkingName" character varying NOT NULL, "capacity" integer NOT NULL, CONSTRAINT "PK_d611d86b1d39963d048b05976aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lab" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "headOfLab" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomNumber" integer NOT NULL, "operationalTime" json NOT NULL, "buildingId" uuid, CONSTRAINT "UQ_cca07dec2da5b734af2b81f5a3e" UNIQUE ("name"), CONSTRAINT "PK_5575ab9332d71474261beb799a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "navigation_path" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "distanceMeters" integer NOT NULL, "pathCoordinates" jsonb NOT NULL, "fromBuildingId" uuid, "toBuildingId" uuid, CONSTRAINT "PK_27cecd06791bc0445e26ef73b29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hall" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "capacity" integer NOT NULL, "description" character varying NOT NULL, "buildingId" uuid, CONSTRAINT "UQ_1b1c3e87ba46f8f91c666a0c963" UNIQUE ("name"), CONSTRAINT "PK_4b7ec43f24e82084474569abec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."dormitory_gender_enum" AS ENUM('Female', 'Male')`);
        await queryRunner.query(`CREATE TYPE "public"."dormitory_dormitory_type_enum" AS ENUM('SpecialNeedPerson', 'NonSpecialNeedPerson')`);
        await queryRunner.query(`CREATE TABLE "dormitory" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "gender" "public"."dormitory_gender_enum" NOT NULL, "dormitory_type" "public"."dormitory_dormitory_type_enum" NOT NULL DEFAULT 'NonSpecialNeedPerson', "number_of_student" integer NOT NULL, "number_of_room" integer NOT NULL, CONSTRAINT "PK_17483b11457c23cad87f30ff31c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "field" ADD CONSTRAINT "FK_c92d58c2dcc76e372ee0d78a5fe" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_aef6cd5cc8a13d76554cedd8584" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cafeteria" ADD CONSTRAINT "FK_0157774276e2518ce37b0cdb252" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "office" ADD CONSTRAINT "FK_8f4199a843353e6968f3f841d60" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "building" ADD CONSTRAINT "FK_e95d3283470d6a04e6ccd016f07" FOREIGN KEY ("cafeteriaId") REFERENCES "cafeteria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_6058f36ca5f6be9677a7cae4fb4" FOREIGN KEY ("building_id") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_0bdac67ad9a7b93159c6206c87d" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_ff5770af635d27c97262dad75c1" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_510101ab11eb36d0e2b64c99266" FOREIGN KEY ("science_type_id") REFERENCES "science_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_0f481340d0ba8db6ca9307180cf" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "faculty" ADD CONSTRAINT "FK_94b6a26e88917f1385577d79f5c" FOREIGN KEY ("science_type_id") REFERENCES "science_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lab" ADD CONSTRAINT "FK_d236585a74655bc406648616bd4" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "navigation_path" ADD CONSTRAINT "FK_72137230a3ec17c9a6bee3ef0cd" FOREIGN KEY ("fromBuildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "navigation_path" ADD CONSTRAINT "FK_082f80a15710817cf132be9b12e" FOREIGN KEY ("toBuildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "hall" ADD CONSTRAINT "FK_b3ed2810fe4552b79958e938768" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hall" DROP CONSTRAINT "FK_b3ed2810fe4552b79958e938768"`);
        await queryRunner.query(`ALTER TABLE "navigation_path" DROP CONSTRAINT "FK_082f80a15710817cf132be9b12e"`);
        await queryRunner.query(`ALTER TABLE "navigation_path" DROP CONSTRAINT "FK_72137230a3ec17c9a6bee3ef0cd"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP CONSTRAINT "FK_d236585a74655bc406648616bd4"`);
        await queryRunner.query(`ALTER TABLE "faculty" DROP CONSTRAINT "FK_94b6a26e88917f1385577d79f5c"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_0f481340d0ba8db6ca9307180cf"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_510101ab11eb36d0e2b64c99266"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_ff5770af635d27c97262dad75c1"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_0bdac67ad9a7b93159c6206c87d"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_6058f36ca5f6be9677a7cae4fb4"`);
        await queryRunner.query(`ALTER TABLE "building" DROP CONSTRAINT "FK_e95d3283470d6a04e6ccd016f07"`);
        await queryRunner.query(`ALTER TABLE "office" DROP CONSTRAINT "FK_8f4199a843353e6968f3f841d60"`);
        await queryRunner.query(`ALTER TABLE "cafeteria" DROP CONSTRAINT "FK_0157774276e2518ce37b0cdb252"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_aef6cd5cc8a13d76554cedd8584"`);
        await queryRunner.query(`ALTER TABLE "field" DROP CONSTRAINT "FK_c92d58c2dcc76e372ee0d78a5fe"`);
        await queryRunner.query(`DROP TABLE "dormitory"`);
        await queryRunner.query(`DROP TYPE "public"."dormitory_dormitory_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."dormitory_gender_enum"`);
        await queryRunner.query(`DROP TABLE "hall"`);
        await queryRunner.query(`DROP TABLE "navigation_path"`);
        await queryRunner.query(`DROP TABLE "lab"`);
        await queryRunner.query(`DROP TABLE "parking"`);
        await queryRunner.query(`DROP TABLE "shopping"`);
        await queryRunner.query(`DROP TABLE "science_type"`);
        await queryRunner.query(`DROP TABLE "faculty"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "registration"`);
        await queryRunner.query(`DROP TABLE "building"`);
        await queryRunner.query(`DROP TYPE "public"."building_type_enum"`);
        await queryRunner.query(`DROP TABLE "office"`);
        await queryRunner.query(`DROP TABLE "cafeteria"`);
        await queryRunner.query(`DROP TYPE "public"."cafeteria_type_enum"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "field"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }

}
