import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT, 10),
  username: 'iam',
  password: 'secret',
  database: 'enrollments',
  synchronize: false,
  entities: [__dirname + '/members/infra/databases/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
};

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
