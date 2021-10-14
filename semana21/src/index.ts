import knex from 'knex'
import { config } from 'dotenv'

config()

// par = true
// impar = false
// não-inteiro = false
export const isEven = (integer: number): any => {
   // const isInteger = Number.isInteger(integer)

   // 4.4
   // 4
   // 4.4 !== 4

   // 2
   // 2
   // 2 === 2

   const roundedInteger = Math.floor(integer)


   if (integer !== roundedInteger) {
      return false
   }

   if (integer % 2 === 0) {
      return true
   } else {
      return false
   }
}

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   },
});