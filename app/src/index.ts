import { AppDataSource } from './data-source'

console.log('start')

const test = async () => {
  console.log('start initialize')
  await AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err)
    })
  console.log('end initialize')

  const result = await AppDataSource.manager.query("SELECT 'a'")
  console.log(result)
}
void test()
