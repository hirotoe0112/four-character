import express, { Request, Response, Application } from 'express'
import dotenv from 'dotenv'
import fourCharacterRoute from './routes/four-characters'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

// ミドルウェア登録
// json()は、json形式のリクエストボディを解析する
app.use(express.json())
// extendedをtrueにすると、ネストしたオブジェクトを解析できる
app.use(express.urlencoded({ extended: true }))

// ルーター登録
app.use('/test', fourCharacterRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
