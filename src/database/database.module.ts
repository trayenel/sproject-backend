import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Users } from './entities/users/users.entity'
import { DataSource } from 'typeorm'
import {Roles} from "./entities/roles/roles.entity";
import {UserRoles} from "./entities/userRoles/userRoles.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_DATABASE'),
        entities: [Users, Roles, UserRoles],
        migrations: ['migrations/**/*.ts'],
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}
