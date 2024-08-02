import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryColumn()
  id: number

  @Column({ type: 'varchar', length: 20, nullable: false })
  username: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  password: string
}
