import { Module } from '@nestjs/common'
import { EmailServerController } from './email-server.controller'
import { EmailServerService } from './email-server.service'

@Module({
  controllers: [EmailServerController],
  providers: [EmailServerService],
})
export class EmailServerModule {}
