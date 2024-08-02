import {DataSource} from "typeorm";
import {ConfigService} from "@nestjs/config";

const configService = new ConfigService();

export const dataSource = new DataSource({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASS'),
    database: configService.get('DB_DATABASE'),
    migrations: ['migrations/**'],
    synchronize: false,})