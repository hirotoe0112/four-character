import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: '../test.db',
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  logging: true,
  logger: 'file',
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
