import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class EmailServerService {
  constructor(private mailerService: MailerService) {}

  sendMail() {
    console.log('sending mail')
    this.mailerService.sendMail({
      to: 'traianstefanx@gmail.com',
      subject: 'Greeting from NestJS NodeMailer',
      template: 'email',
      context: { name: 'traian' },
    })
  }
}
