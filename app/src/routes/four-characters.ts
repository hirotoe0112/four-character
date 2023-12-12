import express, { Response } from 'express'
import { FourCharacter } from '../entity/four-character'

type FourCharacterResponse = {
  data: FourCharacter[]
}

const fourCharacterRoute = express.Router()

fourCharacterRoute.get('/', async (req, res: Response<FourCharacterResponse>) => {
  const fourCharacters = await FourCharacter.find()

  res.statusCode = 200
  res.json({
    data: fourCharacters,
  })
})

export default fourCharacterRoute
