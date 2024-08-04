import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Roles {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 20, unique: true, nullable: false })
  name: string

  constructor(role: Partial<Roles>) {
    Object.assign(this, role)
  }
}
