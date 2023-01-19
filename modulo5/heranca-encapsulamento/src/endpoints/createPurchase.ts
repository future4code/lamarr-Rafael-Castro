import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"
import { PurchasesDatabase } from "../database/PurchaseDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { Product } from "../models/Product"
import { PurchaseDB } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {userId, productId, quantity} = req.body

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await UserDatabase.findUser(userId)

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await ProductDatabase.findProduct(productId)

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }

        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )

        const newPurchase:PurchaseDB = {
            id: Date.now().toString(),
            user_id: userId,
            product_id: productId,
            quantity,
            total_price: product.getPrice() * quantity
        }
        
        await PurchasesDatabase.createPurchase(newPurchase)

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}