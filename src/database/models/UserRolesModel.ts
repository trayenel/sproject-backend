import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { Users } from './UsersModel'

@Entity()
export class UserRoles {
  @PrimaryColumn()
  id: number

  @OneToOne(() => Users)
  @JoinColumn()
  users: Users

  @OneToOne(() => UserRoles)
  @JoinColumn()
  userroles: UserRoles
}
