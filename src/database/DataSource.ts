import {DataSource, DataSourceOptions} from 'typeorm'
import * as process from 'node:process'

export const appData: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: ['entities/**/*.entity.ts'],
  migrations: ['migrations/**/*.ts'],
  synchronize: false,
}

const dataSource = new DataSource(appData)
export default dataSource