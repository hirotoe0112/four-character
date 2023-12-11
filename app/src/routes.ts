import { Application } from 'express'
import fourCharacterRoute from './routes/four-characters'

export const routes = (app: Application) => {
  app.use('/', fourCharacterRoute)
  app.use('/test', fourCharacterRoute)
}
