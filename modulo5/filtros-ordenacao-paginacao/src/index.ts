import express, { Request, Response } from "express"
import cors from 'cors'
import { connection } from "./data/connection"

const app = express()
app.use(express.json())
app.use(cors())

async function selectAllStaff(): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type FROM Exerc_filtros_orden_paginac;
    `)
    return result[0]
}

app.get("/staff", async (req: Request, res: Response): Promise<void> => {
    try {
        const staff = await selectAllStaff()

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff added.")
        }

        res.status(200).send(staff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
