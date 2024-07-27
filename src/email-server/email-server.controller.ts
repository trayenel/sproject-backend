import {Controller, Get, Post} from '@nestjs/common'
import { EmailServerService } from './email-server.service'

@Controller('email-server')
export class EmailServerController {
  constructor(private readonly mailService: EmailServerService) {}

  @Post()
  sendMail() {
    return this.mailService.sendMail()
  }
}
