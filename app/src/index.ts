//import Database from "better-sqlite3";
import { FourCharacters } from './data/four-characters'
import { AppDataSource } from './data-source'

console.log('hello2')

// const db = new Database("test.db");

const test = async () => {
  console.log(test)
  const result = await AppDataSource.manager.query("SELECT 'a'")
  console.log(result)
}
test()

console.log('hello3')
console.log(FourCharacters)
