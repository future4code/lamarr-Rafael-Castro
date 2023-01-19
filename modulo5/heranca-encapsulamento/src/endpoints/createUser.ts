import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {email, password} = req.body

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const newUser = new User(
            Date.now().toString(),
            email,
            password
        )

        await UserDatabase.createUser(newUser)

        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}