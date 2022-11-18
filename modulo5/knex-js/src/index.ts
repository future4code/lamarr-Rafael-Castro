import express, { Request, Response } from "express"
import cors from 'cors'
import { connection } from "./DB/connection"

const app = express()
app.use(express.json())
app.use(cors())

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
    `)
    return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        console.log(await getActorById(id))
        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// Exercício 1B
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE actor_name = '${name}'
    `)
    return result[0][0]
}

// (async () => {
//     console.log(await getActorByName("Tony Ramos"))
// })()

// Exercício 1C
const genderCount = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
    return Object.values(result[0][0])
}
// (async () => {
//     console.log(await genderCount("female"))
// })()

// Exercício 2A
const updateSalary = async (id: string, value: number): Promise<any> => {
    await connection("Actor")
        .where({ id })
        .update({ salary: value })
}
// (async () => {
//     await updateSalary("003", 11)
// })()


// Exercício 2B
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .where({ id })
        .del()
}
// (async () => {
//     await deleteActor("005")
// })()


// Exercício 2C
const avgSalaryGender = async (gender: string): Promise<any> => {
    const result = await connection('Actor')
        .where({ gender })
        .avg('salary')
    return result[0]
}
// (async () => {
//     console.log(await avgSalaryGender('male'))
// })()


// Exercício 3A
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        res.status(200).send(actor)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


// Exercício 3B
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const countByGender = await connection("Actor")
            .where({ gender })
        res.status(200).send(countByGender.length + "")

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


//  Exercício 4A
app.put("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.id, req.body.value)
        res.end('Actor salary updated.')
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


// Exercício 4B
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id)
        res.end('Actor deleted.')
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


// Exercício 5
const addMovie = async (
    id: string,
    movie_name: string,
    synopsis: string,
    release_date: Date,
    playing_limit_date: Date
): Promise<any> => {
    await connection('Movie')
        .insert([{id, movie_name, synopsis,
            release_date, playing_limit_date}])
}

app.post("/movie", async (req: Request, res: Response) => {
    try {
        const {id, movie_name, synopsis, release_date, 
            playing_limit_date} = req.body
        addMovie(id, movie_name, synopsis, release_date, 
            playing_limit_date)
        res.end("Movie added.")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})