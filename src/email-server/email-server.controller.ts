import {Body, Controller, Get, Header, Post} from '@nestjs/common'
import { EmailServerService } from './email-server.service'
import {FormRequestDto} from "./FormRequestDto";

@Controller('email-server')
export class EmailServerController {
  constructor(private readonly mailService: EmailServerService) {}

  @Post()
  @Header('content-type', 'text/html')
  sendMail(@Body() formBody: FormRequestDto) {
    return this.mailService.sendMail(formBody.name, formBody.phoneNumber, formBody.email, formBody.date)
  }
}
