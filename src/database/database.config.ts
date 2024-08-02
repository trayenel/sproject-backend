import * as process from 'node:process'
import {registerAs} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {DataSource} from "typeorm";

export default registerAs('database',
    (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: ['entities/**/*.entity.ts'],
  migrations: ['migrations/**/*.ts'],
  synchronize: false,
}));
