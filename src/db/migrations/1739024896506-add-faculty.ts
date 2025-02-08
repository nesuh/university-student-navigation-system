import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFaculty1739024896506 implements MigrationInterface {
    name = 'AddFaculty1739024896506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departments" DROP CONSTRAINT "FK_218161e23ed40ca4b2e3bcbaf61"`);
        await queryRunner.query(`CREATE TABLE "faculty" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "science_type_id" uuid, CONSTRAINT "PK_635ca3484f9c747b6635a494ad9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "science_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_79f2bbc5d1d3e8f180472ff4d3f" UNIQUE ("name"), CONSTRAINT "PK_db902e40b47e6168c2358976eb5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "registration" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "tenantId"`);
        await queryRunner.query(`ALTER TABLE "departments" DROP COLUMN "headOfDepartmentId"`);
        await queryRunner.query(`ALTER TABLE "registration" ADD "phoneNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registration" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."registration_role_enum" AS ENUM('Registrar', 'HeadOfDepartment')`);
        await queryRunner.query(`ALTER TABLE "registration" ADD "role" "public"."registration_role_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "field" ADD "department_id" uuid`);
        await queryRunner.query(`ALTER TABLE "departments" ADD "faculty_id" uuid`);
        await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "name"`);
        await queryRunner.query(`DROP TYPE "public"."field_name_enum"`);
        await queryRunner.query(`ALTER TABLE "field" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "departments" DROP CONSTRAINT "UQ_8681da666ad9699d568b3e91064"`);
        await queryRunner.query(`ALTER TABLE "field" ADD CONSTRAINT "FK_c92d58c2dcc76e372ee0d78a5fe" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "departments" ADD CONSTRAINT "FK_db9cbab5eb895126fc1689dc2ad" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "faculty" ADD CONSTRAINT "FK_94b6a26e88917f1385577d79f5c" FOREIGN KEY ("science_type_id") REFERENCES "science_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "faculty" DROP CONSTRAINT "FK_94b6a26e88917f1385577d79f5c"`);
        await queryRunner.query(`ALTER TABLE "departments" DROP CONSTRAINT "FK_db9cbab5eb895126fc1689dc2ad"`);
        await queryRunner.query(`ALTER TABLE "field" DROP CONSTRAINT "FK_c92d58c2dcc76e372ee0d78a5fe"`);
        await queryRunner.query(`ALTER TABLE "departments" ADD CONSTRAINT "UQ_8681da666ad9699d568b3e91064" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "name"`);
        await queryRunner.query(`CREATE TYPE "public"."field_name_enum" AS ENUM('Natural', 'Social')`);
        await queryRunner.query(`ALTER TABLE "field" ADD "name" "public"."field_name_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "departments" DROP COLUMN "faculty_id"`);
        await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "department_id"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."registration_role_enum"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "registration" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "departments" ADD "headOfDepartmentId" uuid`);
        await queryRunner.query(`ALTER TABLE "field" ADD "tenantId" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "field" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "field" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "field" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "registration" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "science_type"`);
        await queryRunner.query(`DROP TABLE "faculty"`);
        await queryRunner.query(`ALTER TABLE "departments" ADD CONSTRAINT "FK_218161e23ed40ca4b2e3bcbaf61" FOREIGN KEY ("headOfDepartmentId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
