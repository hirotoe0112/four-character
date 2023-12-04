import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'fc_test',
  password: 'fc_test',
  database: 'fc_test',
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  logging: true,
  logger: 'file',
})
