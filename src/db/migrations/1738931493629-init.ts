import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1738931493629 implements MigrationInterface {
    name = 'Init1738931493629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "classes" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomType" character varying NOT NULL, "buildingId" uuid, CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."field_name_enum" AS ENUM('Natural', 'Social')`);
        await queryRunner.query(`CREATE TABLE "field" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" "public"."field_name_enum" NOT NULL, CONSTRAINT "PK_39379bba786d7a75226b358f81e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "registration" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "operationalTime" json NOT NULL, "type" character varying NOT NULL, "buildingId" uuid, CONSTRAINT "PK_cb23dc9d28df8801b15e9e2b8d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."building_type_enum" AS ENUM('single', 'rectangle')`);
        await queryRunner.query(`CREATE TABLE "building" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" "public"."building_type_enum" NOT NULL, "latitude" numeric(10,6) NOT NULL, "longitude" numeric(10,6) NOT NULL, "description" text NOT NULL, CONSTRAINT "UQ_57655499fbc0671a32732e63008" UNIQUE ("name"), CONSTRAINT "PK_bbfaf6c11f141a22d2ab105ee5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "departments" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "headOfDepartmentId" uuid, "buildingId" uuid, CONSTRAINT "UQ_8681da666ad9699d568b3e91064" UNIQUE ("name"), CONSTRAINT "PK_839517a681a86bb84cbcc6a1e9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('User', 'Admin')`);
        await queryRunner.query(`CREATE TABLE "users" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'User', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shopping" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "shoppingName" character varying NOT NULL, "capacity" integer NOT NULL, CONSTRAINT "PK_7e310c863e4d0cc737aee7618fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."room_roomtype_enum" AS ENUM('Classroom', 'Lab', 'Office', 'Dormitory')`);
        await queryRunner.query(`CREATE TABLE "room" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "floorNumber" integer NOT NULL, "roomType" "public"."room_roomtype_enum" NOT NULL, "buildingId" uuid, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "parkingName" character varying NOT NULL, "capacity" integer NOT NULL, CONSTRAINT "PK_d611d86b1d39963d048b05976aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "office" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "buildingId" uuid, CONSTRAINT "PK_200185316ba169fda17e3b6ba00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "navigation_path" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "distanceMeters" integer NOT NULL, "pathCoordinates" jsonb NOT NULL, "fromBuildingId" uuid, "toBuildingId" uuid, CONSTRAINT "PK_27cecd06791bc0445e26ef73b29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hall" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "capacity" integer NOT NULL, "headOfMeetingRoomId" uuid, "buildingId" uuid, CONSTRAINT "UQ_1b1c3e87ba46f8f91c666a0c963" UNIQUE ("name"), CONSTRAINT "PK_4b7ec43f24e82084474569abec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lab" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "headOfLabId" uuid, "buildingId" uuid, "roomId" uuid, CONSTRAINT "UQ_cca07dec2da5b734af2b81f5a3e" UNIQUE ("name"), CONSTRAINT "PK_5575ab9332d71474261beb799a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."dormitory_gender_enum" AS ENUM('Female', 'Male')`);
        await queryRunner.query(`CREATE TYPE "public"."dormitory_dormitory_type_enum" AS ENUM('SpecialNeedPerson', 'NonSpecialNeedPerson')`);
        await queryRunner.query(`CREATE TABLE "dormitory" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "gender" "public"."dormitory_gender_enum" NOT NULL, "dormitory_type" "public"."dormitory_dormitory_type_enum" NOT NULL DEFAULT 'NonSpecialNeedPerson', "number_of_student" integer NOT NULL, "number_of_room" integer NOT NULL, CONSTRAINT "PK_17483b11457c23cad87f30ff31c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."cafeteria_type_enum" AS ENUM('Government', 'InPerson')`);
        await queryRunner.query(`CREATE TABLE "cafeteria" ("tenantId" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" "public"."cafeteria_type_enum" NOT NULL DEFAULT 'Government', "capacity" integer NOT NULL, "operationalTime" json NOT NULL, "headOfCafeteriaId" uuid, "buildingId" uuid, "roomId" uuid, CONSTRAINT "UQ_703418851dbf0ffef09e255b9a1" UNIQUE ("name"), CONSTRAINT "PK_3b5c7abe2262d7c78e81c37e0c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_aef6cd5cc8a13d76554cedd8584" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_be5bf47d57e57ac22850836da6f" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "departments" ADD CONSTRAINT "FK_218161e23ed40ca4b2e3bcbaf61" FOREIGN KEY ("headOfDepartmentId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "departments" ADD CONSTRAINT "FK_264faebdac2a8d546cc6449d3b6" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_88515f15db1bc3b506028f44893" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "office" ADD CONSTRAINT "FK_8f4199a843353e6968f3f841d60" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "navigation_path" ADD CONSTRAINT "FK_72137230a3ec17c9a6bee3ef0cd" FOREIGN KEY ("fromBuildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "navigation_path" ADD CONSTRAINT "FK_082f80a15710817cf132be9b12e" FOREIGN KEY ("toBuildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "hall" ADD CONSTRAINT "FK_194a545a8159d016867a423f6a7" FOREIGN KEY ("headOfMeetingRoomId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "hall" ADD CONSTRAINT "FK_b3ed2810fe4552b79958e938768" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lab" ADD CONSTRAINT "FK_88bf920af54254be46e671b8636" FOREIGN KEY ("headOfLabId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lab" ADD CONSTRAINT "FK_d236585a74655bc406648616bd4" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lab" ADD CONSTRAINT "FK_1e03820f0f99dbd382bbfcdf605" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cafeteria" ADD CONSTRAINT "FK_2baefb062ad55cbbe20a83d2cfb" FOREIGN KEY ("headOfCafeteriaId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cafeteria" ADD CONSTRAINT "FK_0157774276e2518ce37b0cdb252" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cafeteria" ADD CONSTRAINT "FK_25787e512a31281f21b4f83301e" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cafeteria" DROP CONSTRAINT "FK_25787e512a31281f21b4f83301e"`);
        await queryRunner.query(`ALTER TABLE "cafeteria" DROP CONSTRAINT "FK_0157774276e2518ce37b0cdb252"`);
        await queryRunner.query(`ALTER TABLE "cafeteria" DROP CONSTRAINT "FK_2baefb062ad55cbbe20a83d2cfb"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP CONSTRAINT "FK_1e03820f0f99dbd382bbfcdf605"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP CONSTRAINT "FK_d236585a74655bc406648616bd4"`);
        await queryRunner.query(`ALTER TABLE "lab" DROP CONSTRAINT "FK_88bf920af54254be46e671b8636"`);
        await queryRunner.query(`ALTER TABLE "hall" DROP CONSTRAINT "FK_b3ed2810fe4552b79958e938768"`);
        await queryRunner.query(`ALTER TABLE "hall" DROP CONSTRAINT "FK_194a545a8159d016867a423f6a7"`);
        await queryRunner.query(`ALTER TABLE "navigation_path" DROP CONSTRAINT "FK_082f80a15710817cf132be9b12e"`);
        await queryRunner.query(`ALTER TABLE "navigation_path" DROP CONSTRAINT "FK_72137230a3ec17c9a6bee3ef0cd"`);
        await queryRunner.query(`ALTER TABLE "office" DROP CONSTRAINT "FK_8f4199a843353e6968f3f841d60"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_88515f15db1bc3b506028f44893"`);
        await queryRunner.query(`ALTER TABLE "departments" DROP CONSTRAINT "FK_264faebdac2a8d546cc6449d3b6"`);
        await queryRunner.query(`ALTER TABLE "departments" DROP CONSTRAINT "FK_218161e23ed40ca4b2e3bcbaf61"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_be5bf47d57e57ac22850836da6f"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_aef6cd5cc8a13d76554cedd8584"`);
        await queryRunner.query(`DROP TABLE "cafeteria"`);
        await queryRunner.query(`DROP TYPE "public"."cafeteria_type_enum"`);
        await queryRunner.query(`DROP TABLE "dormitory"`);
        await queryRunner.query(`DROP TYPE "public"."dormitory_dormitory_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."dormitory_gender_enum"`);
        await queryRunner.query(`DROP TABLE "lab"`);
        await queryRunner.query(`DROP TABLE "hall"`);
        await queryRunner.query(`DROP TABLE "navigation_path"`);
        await queryRunner.query(`DROP TABLE "office"`);
        await queryRunner.query(`DROP TABLE "parking"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TYPE "public"."room_roomtype_enum"`);
        await queryRunner.query(`DROP TABLE "shopping"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "departments"`);
        await queryRunner.query(`DROP TABLE "building"`);
        await queryRunner.query(`DROP TYPE "public"."building_type_enum"`);
        await queryRunner.query(`DROP TABLE "registration"`);
        await queryRunner.query(`DROP TABLE "field"`);
        await queryRunner.query(`DROP TYPE "public"."field_name_enum"`);
        await queryRunner.query(`DROP TABLE "classes"`);
    }

}
