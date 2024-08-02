import { DataSource } from 'typeorm'
import * as process from 'node:process'

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  synchronize: false,
  migrations: [
    '/home/traian/IdeaProjects/sproject-backend/src/database/migrations/1722591474988-init_db.ts',
  ],
})
