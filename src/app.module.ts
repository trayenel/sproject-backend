import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MailerModule } from '@nestjs-modules/mailer'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { EmailServerModule } from './email-server/email-server.module'
import * as process from 'node:process'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: String(process.env["MAIL_HOST "]),
        port: Number(process.env["MAIL_HOST "]),
        secure: false,
        auth: {
          user: process.env["MAIL_USER "],
          pass: process.env["MAIL_PASS "],
        },
      },
      defaults: { from: '"nest-modules" <modules@nestjs.com>' },
      template: {
        dir: '/home/traian/IdeaProjects/sproject-backend/src/templates',
        adapter: new HandlebarsAdapter(),
        options: { strict: true },
      },
    }),
    EmailServerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
