import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDatabase {

    protected static userTableName = "Labe_Users"
    protected static productTableName = "Labe_Products"
    protected static purchasesTableName = "Labe_Purchases"

    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        },
    })
}