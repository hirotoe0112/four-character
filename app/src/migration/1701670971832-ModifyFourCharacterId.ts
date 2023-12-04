import { MigrationInterface, QueryRunner } from 'typeorm'

export class ModifyFourCharacterId1701670971832 implements MigrationInterface {
  name = 'ModifyFourCharacterId1701670971832'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "app"."four_character" ALTER COLUMN "id" DROP DEFAULT`,
    )
    await queryRunner.query(`DROP SEQUENCE "app"."four_character_id_seq"`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS "app"."four_character_id_seq" OWNED BY "app"."four_character"."id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."four_character" ALTER COLUMN "id" SET DEFAULT nextval('"app"."four_character_id_seq"')`,
    )
  }
}
