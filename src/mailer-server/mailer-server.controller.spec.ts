import { Test, TestingModule } from '@nestjs/testing'
import { MailerServerController } from './mailer-server.controller'

describe('EmailServerController', () => {
  let controller: MailerServerController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailerServerController],
    }).compile()

    controller = module.get<MailerServerController>(MailerServerController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
