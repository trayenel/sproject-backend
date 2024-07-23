import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: Promise<string> }> {
    const user = await this.userService.findOne(username)
    if (user?.password !== pass) throw new UnauthorizedException()

    const payload = { sub: user.userId, username: user.username }

    return { access_token: this.jwtService.signAsync(payload) }
  }
}
