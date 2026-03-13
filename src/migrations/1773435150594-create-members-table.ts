import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMembersTable1773435150594 implements MigrationInterface {
  private readonly table = 'members';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE ${this.table}  (
            id VARCHAR(64) PRIMARY KEY,
            name varchar(64) NOT NULL,
            email varchar(255) UNIQUE NOT NULL,
            gender varchar(16),
            birthdate DATE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE ${this.table};
    `);
  }
}
