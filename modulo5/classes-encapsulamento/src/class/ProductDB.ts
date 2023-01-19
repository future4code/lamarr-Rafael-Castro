import { Knex } from "knex";
import { TABLE_PURCHASES } from "../database/tableNames";

export class ProductDatabase {
    constructor(private connection: Knex){
        this.connection
    }
    public getProducts = async () =>{
        const result = await this.connection(`${TABLE_PURCHASES}`).select()
        return result
    }
}