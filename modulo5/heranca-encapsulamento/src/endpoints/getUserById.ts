import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const getUserById = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.query.userId as string

        const result = await UserDatabase.getUserById(userId)

        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}