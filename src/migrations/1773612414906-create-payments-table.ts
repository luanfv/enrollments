import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePaymentsTable1773612414906 implements MigrationInterface {
  private readonly table = 'payments';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE ${this.table} (
        id VARCHAR(64) PRIMARY KEY,
        enrollment_id VARCHAR(64) REFERENCES enrollments(id) NOT NULL,
        status VARCHAR(16) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        due_date DATE NOT NULL,
        paid_at TIMESTAMP,
        payment_method VARCHAR(16),
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
