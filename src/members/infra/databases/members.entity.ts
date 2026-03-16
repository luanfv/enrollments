import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('members')
export class MembersEntity {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  id: string;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 16, nullable: true })
  gender?: string;

  @Column({ type: 'date' })
  birthdate: Date;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
