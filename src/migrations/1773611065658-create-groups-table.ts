import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGroupsTable1773611065658 implements MigrationInterface {
  private readonly table = 'groups';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE ${this.table} (
        id VARCHAR(64) PRIMARY KEY,
        title VARCHAR(32) NOT NULL,
        status VARCHAR(16) NOT NULL,
        monthly_price DECIMAL(10, 2) NOT NULL,
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
