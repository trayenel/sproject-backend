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
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        secure: false,
        auth: {
          user:"bb007ec216d254",
          pass: "f59a88b66d5971",
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
