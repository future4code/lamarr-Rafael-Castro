import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Response, Request } from "express"

export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number) {
        this.id
        this.name
        this.price
    }
}