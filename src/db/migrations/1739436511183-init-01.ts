import { MigrationInterface, QueryRunner } from "typeorm";

export class Init011739436511183 implements MigrationInterface {
    name = 'Init011739436511183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "science_type" RENAME COLUMN "name" TO "scienceTypeName"`);
        await queryRunner.query(`ALTER TABLE "science_type" RENAME CONSTRAINT "UQ_79f2bbc5d1d3e8f180472ff4d3f" TO "UQ_4dd4761ce7615ca07ff6e347542"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "science_type" RENAME CONSTRAINT "UQ_4dd4761ce7615ca07ff6e347542" TO "UQ_79f2bbc5d1d3e8f180472ff4d3f"`);
        await queryRunner.query(`ALTER TABLE "science_type" RENAME COLUMN "scienceTypeName" TO "name"`);
    }

}
