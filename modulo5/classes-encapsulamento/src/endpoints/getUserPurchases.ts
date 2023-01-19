import { Request, Response } from "express"
import { PurchaseDatabase } from "../class/PurchaseDB"
import connection from "../database/connection"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const purchaseDB = new PurchaseDatabase(connection)
        const [result] = await purchaseDB.getUserPurchases(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}