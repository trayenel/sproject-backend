import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true, nullable: false, type: 'varchar', length: 20 })
  name: string

  @Column({ nullable: false, type: 'varchar', length: 500 })
  body: string

  @Column({ nullable: false, type: 'timestamp' })
  created_at: string

  @Column({ nullable: false, type: 'timestamp' })
  updated_at: string
}
