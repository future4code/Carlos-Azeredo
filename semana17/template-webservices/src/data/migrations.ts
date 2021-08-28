import { connection } from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS aula51_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         nickname VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS aula51_address(
         cep VARCHAR (255) NOT NULL,
         address VARCHAR (255) NOT NULL,
         number INT NOT NULL,
         complement INT,
         neighborhood VARCHAR (255) NOT NULL,
         city VARCHAR (255) NOT NULL,
         state VARCHAR (255) NOT NULL,
         users_id VARCHAR (255),
         FOREIGN KEY(users_id) REFERENCES aula51_users(id)
      );
         
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula51_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)