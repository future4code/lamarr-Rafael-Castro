import express, { Request, Response } from "express"
import cors from 'cors'
import { connection } from "./data/connection"

const app = express()
app.use(express.json())
app.use(cors())

//  Exercício 1
// a)
async function getStaffByName(name:string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type FROM Exerc_filtros_orden_paginac WHERE name LIKE "%${name}%";
    `)
    return result[0]
}

app.get("/staff/name", async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name as string
        
        if (!name) {
            name = "%"
        }

        const staff = await getStaffByName(name)

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff member found.")
        }

        res.status(200).send(staff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})


// b)
async function getStaffByType(type:string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type FROM Exerc_filtros_orden_paginac WHERE type = "${type}";
    `)
    return result[0]
}

app.get("/staff/type/:type", async (req: Request, res: Response): Promise<void> => {
    try {
        let type = req.params.type as string

        const staff = await getStaffByType(type)

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff member found.")
        }

        res.status(200).send(staff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})


// Exercício 2
async function getStaffOrderBy(field:string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type FROM Exerc_filtros_orden_paginac ORDER BY ${field};
    `)
    return result[0]
}

app.get("/staff/orderby", async (req: Request, res: Response): Promise<void> => {
    try {
        let field = req.query.field as string

        if (!field) {
            field = 'email'
        }

        const staff = await getStaffOrderBy(field)

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff member found.")
        }

        res.status(200).send(staff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})


// Exercícios 3
async function getStaffLimit(value:number): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type FROM Exerc_filtros_orden_paginac LIMIT 5 OFFSET ${value};
    `)
    return result[0]
}

app.get("/staff/pagination", async (req: Request, res: Response): Promise<void> => {
    try {
        let page = Number(req.query.page)
        let offset = 5 * (page - 1)

        const staff = await getStaffLimit(offset)

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff member found.")
        }

        res.status(200).send(staff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})


// Exercício 4
async function getStaffFull(offset:number, fieldSort:string, nameFilter:string, typeFilter:string ): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM Exerc_filtros_orden_paginac 
        WHERE name LIKE "%${nameFilter}%" OR type LIKE "%${typeFilter}%"
        ORDER BY ${fieldSort} 
        LIMIT 5 OFFSET ${offset} 
        `)       
    return result[0]
}

app.get("/staff/full", async (req: Request, res: Response): Promise<void> => {
    try {
        let page = Number(req.query.page)
        let offset = 5 * (page - 1)
        let fieldSort = req.query.fieldSort as string
        let nameFilter = req.query.nameFilter as string
        let typeFilter = req.query.typeFilter as string

        if (!nameFilter) {
            nameFilter = "%"
        }
        if (!typeFilter) {
            typeFilter = "%"
        }
        if (!fieldSort) {
            fieldSort = "name DESC"
        }
        if (!page) {
            offset = 1
        }

        const staff = await getStaffFull(offset, fieldSort, nameFilter, typeFilter)

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff member found.")
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
