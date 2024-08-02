import { Test, TestingModule } from '@nestjs/testing'
import { MailerServerService } from './mailer-server.service'

describe('EmailServerService', () => {
  let service: MailerServerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailerServerService],
    }).compile()

    service = module.get<MailerServerService>(MailerServerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
