import { Request, Response } from "express"
import { PurchasesDatabase } from "../database/PurchaseDatabase"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {id} = req.params

        const [result] = await PurchasesDatabase.getUserPurchases(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}