import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEnrollementsTable1773611892755 implements MigrationInterface {
  private readonly table = 'enrollments';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE ${this.table} (
        id VARCHAR(64) PRIMARY KEY,
        member_id VARCHAR(64) REFERENCES members(id) NOT NULL,
        group_id VARCHAR(64) REFERENCES groups(id) NOT NULL,
        status VARCHAR(16) NOT NULL,
        next_payment DATE NOT NULL,
        monthly_price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        
        UNIQUE(member_id, group_id)
    );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE ${this.table};
    `);
  }
}
