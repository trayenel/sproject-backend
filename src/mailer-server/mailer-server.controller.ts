import { Body, Controller, Get, Header, Post } from '@nestjs/common'
import { MailerServerService } from './mailer-server.service'
import { FormDto } from './dto/FormDto'

@Controller('email-server')
export class MailerServerController {
  constructor(private readonly mailService: MailerServerService) {}

  @Post()
  @Header('content-type', 'text/html')
  sendMail(@Body() formBody: FormDto) {
    return this.mailService.sendMail(formBody.name, formBody.phoneNumber, formBody.email, formBody.date)
  }
}
