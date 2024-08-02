import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MailerServerModule } from './mailer-server/mailer-server.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerServerModule,
    DatabaseModule,
    MailerServerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
