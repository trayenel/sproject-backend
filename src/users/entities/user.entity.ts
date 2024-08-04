import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
  username: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  first_name: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  last_name: string

  @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
  email: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  password: string

  constructor(user: Partial<Users>) {
    Object.assign(this, user)
  }
}
