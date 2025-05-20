import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm'; // Use correct import based on the library you're using
import { SeederOptions } from 'typeorm-extension';
dotenv.config({ path: '.env' });

const pathPrefix = ''; // Adjust for different environments

// Define TypeORM configuration separately
export const typeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  schema: process.env.DATABASE_SCHEMA,
  entities: [`${pathPrefix}dist/db/entities/**/*.entity.{ts,js}`],
  migrations: [`${pathPrefix}dist/db/migrations/*.{ts,js}`],
  subscribers: [`${pathPrefix}dist/db/subscribers/*.{ts,js}`],
  migrationsRun: true,
  migrationsTableName: 'typeorm_migrations',
  logger: 'advanced-console',
  logging: 'all',
  synchronize: false,
  // autoLoadEntities: true,
};

const dataSource = new DataSource(typeormConfig);

// Now define Seeder-related configurations separately
export const seederConfig: SeederOptions = {
  seeds: [`${pathPrefix}dist/db/seeders/**.seeder.{ts,js}`], // Path to your seeders
  seedTracking: true,
  factories: [], // Add any specific factories if needed
};

export default dataSource;
