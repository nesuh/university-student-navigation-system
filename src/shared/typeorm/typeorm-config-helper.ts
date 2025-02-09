import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
dotenv.config({ path: '.env' });

export const TypeOrmConfigHelper = {
  DATABASE_HOST: process.env.DATABASE_HOST ?? 'localhost',
  DATABASE_PORT: process.env.DATABASE_PORT ?? '5432',
  DATABASE_NAME: process.env.DATABASE_NAME ?? 'sns',
  DATABASE_USER: process.env.DATABASE_USER ?? 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ?? '0000',
};

const pathPrefix = process.env.NODE_ENV === 'development' ? 'src/' : 'dist/'; 

export const dataSourceOptions = {
  type: 'postgres',
  host: TypeOrmConfigHelper.DATABASE_HOST,
  port: Number(TypeOrmConfigHelper.DATABASE_PORT),
  database: TypeOrmConfigHelper.DATABASE_NAME,
  username: TypeOrmConfigHelper.DATABASE_USER,
  password: TypeOrmConfigHelper.DATABASE_PASSWORD,
  entities: [`${pathPrefix}**/*.entity.{ts,js}`], 
  migrations: [`${pathPrefix}db/migrations/*.{ts,js}`], 
  migrationsRun: true,
  migrationsTableName: 'typeorm_migrations',
  logger: 'advanced-console',
  logging: 'all',
  synchronize: false,
  autoLoadEntities: true,
} as DataSourceOptions;

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
