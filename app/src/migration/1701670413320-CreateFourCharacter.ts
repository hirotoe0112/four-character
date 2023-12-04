import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateFourCharacter1701670413320 implements MigrationInterface {
  name = 'CreateFourCharacter1701670413320'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "app"`)
    await queryRunner.query(
      `CREATE TABLE "app"."four_character" ("id" SERIAL NOT NULL, "word" character varying NOT NULL, "meaning" character varying NOT NULL, CONSTRAINT "PK_1b79b88c65eb6378a85c9448e26" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "app"."four_character"`)
    await queryRunner.query(`DROP SCHEMA "app"`)
  }
}
