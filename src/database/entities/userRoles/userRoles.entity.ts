import {
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Users } from '../users/users.entity'
import {Roles} from "../roles/roles.entity";

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Users)
  @JoinColumn()
  users: Users

  @OneToOne(() => Roles)
  @JoinColumn()
  roles: Roles
}
