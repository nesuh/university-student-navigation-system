"use strict";
var _a, _b, _c, _d, _e;
exports.__esModule = true;
exports.dataSourceOptions = exports.TypeOrmConfigHelper = void 0;
var dotenv = require("dotenv");
var typeorm_1 = require("typeorm");
dotenv.config({ path: '.env' });
exports.TypeOrmConfigHelper = {
    DATABASE_HOST: (_a = process.env.DATABASE_HOST) !== null && _a !== void 0 ? _a : 'localhost',
    DATABASE_PORT: (_b = process.env.DATABASE_PORT) !== null && _b !== void 0 ? _b : '5432',
    DATABASE_NAME: (_c = process.env.DATABASE_NAME) !== null && _c !== void 0 ? _c : 'sns',
    DATABASE_USER: (_d = process.env.DATABASE_USER) !== null && _d !== void 0 ? _d : 'postgres',
    DATABASE_PASSWORD: (_e = process.env.DATABASE_PASSWORD) !== null && _e !== void 0 ? _e : '0000'
};
var pathPrefix = process.env.NODE_ENV === 'development' ? 'src/' : 'dist/';
exports.dataSourceOptions = {
    type: 'postgres',
    host: exports.TypeOrmConfigHelper.DATABASE_HOST,
    port: Number(exports.TypeOrmConfigHelper.DATABASE_PORT),
    database: exports.TypeOrmConfigHelper.DATABASE_NAME,
    username: exports.TypeOrmConfigHelper.DATABASE_USER,
    password: exports.TypeOrmConfigHelper.DATABASE_PASSWORD,
    entities: ['src/db/**/*.entity.{ts,js}'],
    subscribers: [pathPrefix + "**/subscribers/*.subscribers.{ts,js}"],
    migrations: ['src/db/migrations/*.{ts,js}'],
    migrationsRun: true,
    migrationsTableName: 'typeorm_migrations',
    logger: 'advanced-console',
    logging: true,
    synchronize: false,
    autoLoadEntities: true
};
var dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports["default"] = dataSource;
