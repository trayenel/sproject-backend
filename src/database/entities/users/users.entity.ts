import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 20, nullable: false })
  username: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  password: string
}
