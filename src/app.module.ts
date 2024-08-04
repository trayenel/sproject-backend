import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MailerServerModule } from './mailer-server/mailer-server.module'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'
import { UsersModule } from './users/users.module'
import { RolesModule } from './roles/roles.module'
import { BlogModule } from './blog/blog.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerServerModule,
    DatabaseModule,
    MailerServerModule,
    UsersModule,
    RolesModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
