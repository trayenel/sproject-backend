import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Users } from '../../users/entities/user.entity'
import { Roles } from '../../roles/entities/role.entity'

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Users, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: Users

  @OneToOne(() => Roles, { onDelete: 'CASCADE' })
  @JoinColumn()
  role: Roles
}
