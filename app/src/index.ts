import express, { Application } from 'express'
import dotenv from 'dotenv'
import { AppDataSource } from './data-source'
import { routes } from './routes'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

const server = async () => {
  // DB初期化
  await AppDataSource.initialize()

  // ミドルウェア登録
  // json()は、json形式のリクエストボディを解析する
  app.use(express.json())
  // extendedをtrueにすると、ネストしたオブジェクトを解析できる
  app.use(express.urlencoded({ extended: true }))
  // etagの生成を無効にする
  app.disable('etag')

  // レスポンスヘッダー
  app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', ['http://localhost:8000'])
    res.set('X-FRAME-OPTIONS', 'DENY')
    res.set('X-Content-Type-Options', 'nosniff')
    res.set('cache-control', 'no-store')
    next()
  })

  // ルーター登録
  routes(app)

  // サーバー起動
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

void server()
