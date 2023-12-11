import express, { Response } from 'express'
import { AppDataSource } from '../data-source'
import { FourCharacter } from '../entity/four-character'

type FourCharacterResponse = {
  data: FourCharacter[]
}

const fourCharacterRoute = express.Router()

fourCharacterRoute.use(async (req, res, next) => {
  await AppDataSource.initialize()
  next()
})

fourCharacterRoute.get('/', async (req, res: Response<FourCharacterResponse>) => {
  const fourCharacters = await FourCharacter.find()

  res.statusCode = 200
  res.json({
    data: fourCharacters,
  })
})

export default fourCharacterRoute
