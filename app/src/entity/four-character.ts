import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm'

@Entity({ name: 'four_character', schema: 'app' })
export class FourCharacter extends BaseEntity {
  @PrimaryColumn()
  id!: number

  @Column()
  word!: string

  @Column()
  meaning!: string
}
