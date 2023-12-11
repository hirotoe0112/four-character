import { AppDataSource } from './data-source'
import { parse } from 'yaml'
import fs from 'fs'
import path from 'path'
import { FourCharacter } from './entity/four-character'

type Character = {
  entity: string
  items: FourCharacter[]
}

const loadData = async () => {
  await AppDataSource.initialize()

  const file = fs.readFileSync(
    path.resolve(__dirname, './data/four-characters.yml'),
    'utf8',
  )
  const parsedData: Character = parse(file)

  await FourCharacter.save(parsedData.items)
}
void loadData()
