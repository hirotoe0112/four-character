import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'four_character', schema: 'app' })
export class FourCharacter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  word!: string

  @Column()
  meaning!: string
}
