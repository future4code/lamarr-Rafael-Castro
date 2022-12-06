import { Knex } from "knex";
import { TABLE_USERS } from "../database/tableNames"

export class UserDatabase {
    constructor(private connection:Knex){
        this.connection
    }
    public getUsers = async ()=>{
        const result = await this.connection(`${TABLE_USERS}`).select()
        return result
    }
}