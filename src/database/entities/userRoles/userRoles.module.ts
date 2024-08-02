import { Module } from '@nestjs/common'
import { UserRolesService } from './userRoles.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRolesController } from './userRoles.controller'
import {UserRoles} from "./userRoles.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserRoles])],
  providers: [UserRolesService],
  controllers: [UserRolesController],
})
export class UserRolesModule {}
