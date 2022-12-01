import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

// Exercício 2

const createTables = () => connection
    .schema.createTable('AddressInfo', (table) => {
        table.string('Cep')
        table.string('Logradouro')
        table.string('Numero')
        table.string('Complemento')
        table.string('Bairro')
        table.string('Cidade')
        table.string('Estado')

        console.log('Table created.')
    }).catch(printError)

createTables()