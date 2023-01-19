import { BaseDatabase } from "./BaseDatabase"
import { PurchaseDB } from "../models/Purchase"

export class PurchasesDatabase extends BaseDatabase {

    public static getUserPurchases = async (id: string) => {
        const result = await PurchasesDatabase.connection
            .raw(`
                SELECT
                    ${PurchasesDatabase.userTableName}.email,
                    ${PurchasesDatabase.productTableName}.name AS product_name,
                    ${PurchasesDatabase.productTableName}.price AS product_price,
                    ${PurchasesDatabase.purchasesTableName}.quantity AS product_quantity,
                    ${PurchasesDatabase.purchasesTableName}.total_price
                FROM ${PurchasesDatabase.purchasesTableName}
                JOIN ${PurchasesDatabase.userTableName}
                ON ${PurchasesDatabase.purchasesTableName}.user_id = ${PurchasesDatabase.userTableName}.id
                JOIN ${PurchasesDatabase.productTableName}
                ON ${PurchasesDatabase.purchasesTableName}.product_id = ${PurchasesDatabase.productTableName}.id
                WHERE ${PurchasesDatabase.purchasesTableName}.user_id = ${id};
            `)
        return result
    }

    public static createPurchase = async (newPurchase: PurchaseDB) => {
        await PurchasesDatabase
            .connection(PurchasesDatabase.purchasesTableName)
            .insert(newPurchase)
    }

}