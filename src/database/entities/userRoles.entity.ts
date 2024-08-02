import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Users } from './users.entity'

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Users)
  @JoinColumn()
  users: Users

  @OneToOne(() => UserRoles)
  @JoinColumn()
  userroles: UserRoles
}
