import { BaseDatabase } from "./BaseDatabase"

export class Migrations extends BaseDatabase {
    public static async createTables(): Promise<void> {
        Migrations.connection.raw(`
            CREATE TABLE User_Arq(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(255) DEFAULT "NORMAL"
            )
        `)
            .then(() => {
                console.log('Table created.')
            })
            .catch((error: any) => console.log(error.sqlMessage || error.message))
            .finally(() => {
                BaseDatabase.connection.destroy()
            })
    }
}

Migrations.createTables()