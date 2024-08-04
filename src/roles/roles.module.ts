import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RolesController } from './roles.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Roles } from './entities/role.entity'
import { UserRoles } from './entities/user-role.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Roles, UserRoles])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
