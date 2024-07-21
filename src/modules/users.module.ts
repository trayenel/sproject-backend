import { Module } from '@nestjs/common'
import { AuthController } from '../controllers/auth.controller'
import { AuthService } from '../providers/auth.service'

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class UsersModule {}
