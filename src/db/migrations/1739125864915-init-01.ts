import { MigrationInterface, QueryRunner } from "typeorm";

export class Init011739125864915 implements MigrationInterface {
    name = 'Init011739125864915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departments" DROP CONSTRAINT "FK_264faebdac2a8d546cc6449d3b6"`);
        await queryRunner.query(`ALTER TABLE "departments" DROP COLUMN "buildingId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departments" ADD "buildingId" uuid`);
        await queryRunner.query(`ALTER TABLE "departments" ADD CONSTRAINT "FK_264faebdac2a8d546cc6449d3b6" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
