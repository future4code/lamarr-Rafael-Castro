import express, { Request, Response } from "express"
import cors from 'cors'
import { users, user } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})
// a) Método GET
// b) "/users"


// Exercicio 2
app.get("/users/type", (req: Request, res: Response) => {
    const accountType = req.query.type as string

    if (accountType.toUpperCase() !== 'NORMAL' && accountType.toUpperCase() !== 'ADMIN') {
        res.status(400).send("Informar tipo de conta NORMAL ou ADMIN.")
    }

    const filteredUsers = users.filter(item => {
        return item.type === accountType.toUpperCase()
    })
    res.status(200).send(filteredUsers)
})

// a)
// Através de query, pois trata-se de um parametro de busca.

// b) Tipagem da base de dados usando ENUM para restringir as opções possíveis para a
// propriedade TYPE.
// No código uma condicional que verifica se o valor de entrada é NORMAL ou ADMIN.
// Caso contrário, um erro e alerta são retornados.


// Exercicio 3
app.get("/users/name", (req: Request, res: Response) => {
    const userName = req.query.name as string

    const filteredUsers = users.filter(item => {
        return item.name.toLocaleLowerCase().includes(userName.toLocaleLowerCase())
    })

    res.status(200).send(filteredUsers)
})

// a)
// Query. Por se tratar de um parametro de busca.

// b)
// app.get("/users/name", (req:Request, res:Response)=>{
//     const userName = req.query.name as string

//     const filteredUsers = users.filter(item=>{
//         return item.name.toLocaleLowerCase().includes(userName.toLocaleLowerCase())
//     })

//     if (filteredUsers.length < 1) {
//         res.status(400).send("No user found.")
//     }

//     res.status(200).send(filteredUsers)
// })


// Exercicio 4
app.post("/users", (req: Request, res: Response) => {
    const { name, email, type, age } = req.body

    const newUser: user = {
        id: Math.random(),
        name,
        email,
        type: type.toUpperCase(),
        age
    }

    users.push(newUser)

    res.status(200).send(users)
})

// a)
// Se o método for alterado tanto no endpoint quanto no client, a requisição funciona normalente. Se for
// alterado apenas no endpoint, não irá funcionar, naturalmente.

// b)
// Não, PUT é adequado para atualizar dados já existentes.


// Exercicio 5
app.put("/user", (req: Request, res: Response) => {
    const userAltered = users.pop()
    

    if (userAltered) {
        userAltered.name = userAltered.name + '-ALTERADO'
        users.push(userAltered)
    }

    res.status(200).send(users)
})


// Exercicio 6
app.patch("/user", (req: Request, res: Response) => {
    const userRealtered = users.pop()

    if (userRealtered) {
        userRealtered.name = userRealtered.name.replace("-ALTERADO", "-REALTERADO")
        users.push(userRealtered)
    }

    res.status(200).send(users)
})


// Exercicio 7
app.delete("/user/:id", (req:Request, res:Response)=>{
    const userId = Number(req.params.id)

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            users.splice(userId-1, 1)
        }
    }
    res.status(200).send(users)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})