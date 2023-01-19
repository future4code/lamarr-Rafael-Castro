import { Request, Response } from "express"
import { ProductDatabase } from "../class/ProductDB"
import connection from "../database/connection"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const productsDB = new ProductDatabase(connection)
        const result = await productsDB.getProducts()
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}