import { Module } from '@nestjs/common'
import { MailerServerController } from './mailer-server.controller'
import { MailerServerService } from './mailer-server.service'
import { MailerModule } from '@nestjs-modules/mailer'
import process from 'node:process'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get('MAIL_HOST'),
          port: configService.get('MAIL_PORT'),
          secure: false,
          auth: {
            user: configService.get('MAIL_USER'),
            pass: configService.get('MAIL_PASS'),
          },
        },
        defaults: { from: '"nest-modules" <modules@nestjs.com>' },
        template: {
          dir: '/home/traian/IdeaProjects/sproject-backend/src/templates',
          adapter: new HandlebarsAdapter(),
          options: { strict: true },
        },
      }),
    }),
  ],
  controllers: [MailerServerController],
  providers: [MailerServerService],
})
export class MailerServerModule {}
