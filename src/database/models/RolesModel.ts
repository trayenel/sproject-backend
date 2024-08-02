import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Roles {
  @PrimaryColumn()
  id: number

  @Column({ type: 'varchar', length: 20, unique: true, nullable: false })
  name: string
}
