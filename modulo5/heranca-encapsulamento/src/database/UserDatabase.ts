import { User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase{

    public static getAllUsers = async () => {
        const result = await UserDatabase.connection(UserDatabase.userTableName).select()
        return result
    }

    public static createUser = async (newUser:User) => {
        await UserDatabase.connection(UserDatabase.userTableName).insert(newUser)
    }

    public static getUserById = async (id:string) => {
        const result = await UserDatabase.connection(UserDatabase.userTableName)
            .select()
            .where('id','=',`${id}`)
        return result
    }

    public static findUser = async (userId:string) => {
        const result = await UserDatabase
            .connection(UserDatabase.userTableName)
            .select()
            .where({ id: userId })
        return result
    }
}