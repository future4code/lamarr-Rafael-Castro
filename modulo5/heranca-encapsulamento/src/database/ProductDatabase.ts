import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{

    public static getProducts = async () => {
        const result = await ProductDatabase
            .connection(ProductDatabase.productTableName)
            .select()
        return result
    }

    public static createProduct = async (newProduct:Product) => {
        await ProductDatabase
            .connection(ProductDatabase.productTableName)
            .insert(newProduct)
    }
}