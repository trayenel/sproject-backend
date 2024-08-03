import { Module } from '@nestjs/common'
import { UserRolesService } from './user-roles.service'
import { UserRolesController } from './user-roles.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRoles } from './entities/user-role.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserRoles])],
  controllers: [UserRolesController],
  providers: [UserRolesService],
})
export class UserRolesModule {}
