import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailerServerService {
  constructor(private mailerService: MailerService) {}

  sendMail(name, phoneNumber, emailAddress, date) {
    this.mailerService.sendMail({
      to: 'traianstefanx@gmail.com',
      subject: 'Programare',
      template: 'email',
      context: {
        name: name,
        phone: phoneNumber,
        email: emailAddress,
        date: date,
      },
    })
  }
}
