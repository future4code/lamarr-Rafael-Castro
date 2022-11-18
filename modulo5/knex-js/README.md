# KNEX.JS

## Exercício 1

### a)
A resposta retorna uma lista contendo duas outras listas. Uma delas contém os dados retornados da query e a segunda contém metadados relativos ao banco de dados.

### b)
```
const getActorByName = async (name:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE actor_name = '${name}'
    `)
    return result[0][0]
}

(async () => {
    console.log(await getActorByName("Tony Ramos"))
})()
```

### c)
```
const genderCount = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
    return Object.values(result[0][0])
}
(async () => {
    console.log(await genderCount("female"))
})()
```


## Exercício 2
### a)
```
const updateSalary = async (id: string, value: number): Promise<any> => {
    await connection("Actor")
        .where({id:id})
        .update({salary:value})
}
(async () => {
    await updateSalary("003", 10)
})()
```

### b)
```
const deleteActor = async (id:string): Promise<any> => {
    await connection("Actor")
        .where({id})
        .del()
}
(async () => {
    await deleteActor("005")
})()
```

### c)
```
const avgSalaryGender = async (gender: string): Promise<any> => {
    const result = await connection
        .where({gender})
        .from('Actor')
        .avg('salary')
    return result
}
(async () => {
    console.log(await avgSalaryGender('male'))
})()
```

## Exercício 3
### a)
```
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        res.status(200).send(actor)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})
```

### b)
```
app.get("/actor", async (req:Request, res:Response) => {
    try {
        const gender = req.query.gender
        const countByGender = await connection("Actor")
        .where({gender})
        res.status(200).send(countByGender.length+"")

    } catch (error:any) {
        res.status(400).send(error.message)
    }
})
```


## Exercício 4
### a)
```
app.put("/actor", async (req:Request, res:Response) => {
    try {
        await updateSalary(req.body.id, req.body.value)
        res.end('Actor salary updated.')
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})
```

### b)
```
app.delete("/actor/:id", async (req:Request, res:Response)=> {
    try {
        await deleteActor(req.params.id)
        res.end('Actor deleted.')
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})
```

## Exercício 5
```
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
```