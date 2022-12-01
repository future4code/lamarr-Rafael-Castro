import { connection } from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE Exerc_filtros_orden_paginac(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         type VARCHAR(255) NOT NULL
         );
`)
   .then(() => { console.log("Tabela criada.") })
   .catch(printError)

const insertUsers = () => connection("Exerc_filtros_orden_paginac")
   .insert(users)
   .then(() => { console.log("Usuários adicionados.") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)