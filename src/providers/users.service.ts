import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  login(): string {
    return 'Hello World!'
  }
}
