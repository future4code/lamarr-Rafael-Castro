import express, { Request, Response } from "express"
import cors from 'cors'
import fs from 'fs'

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1
app.get("/ping", (req:Request, res:Response)=> {
    res.send("pong, meu nobre!")
})


//  Exercicio 2
type toDo = {
    userId:number,
    id:number,
    title:string,
    completed:boolean
}


// Exercicio 3
let toDos:toDo[] = [
    {
        userId: 1,
        id: 1,
        title:"Secar 1kg de gelo",
        completed:false
    },
    {
        userId: 1,
        id: 2,
        title:"Desentortar 50 parabrisas",
        completed:false
    },
    {
        userId: 2,
        id: 3,
        title:"Buscar 1 caixa de colorbar na MTV",
        completed:true
    },
    {
        userId: 2,
        id: 4,
        title:"Apagar incêncio na caixa d'água",
        completed:true
    },
    {
        userId: 3,
        id: 5,
        title:"Escapar de um assalto com uma carta REVERTER de Uno",
        completed:false
    },
]


// Exercicio 4
app.get("/todos", (req:Request, res:Response)=> {
    const status = req.body.status

    if (!status) {
        res.status(400).send("Please inform status for the tasks.")
    }

    const filteredToDos = toDos.filter(item =>{
        return item.completed === status
    })
    res.status(200).send(filteredToDos)
})


// Exercicio 5
app.post("/todos", (req:Request, res:Response)=> {
    const userId = req.body.userId
    const taskTitle = req.body.title

    if (!userId) {
        res.status(400).send("Please inform user ID.")
    }
    if (!taskTitle) {
        res.status(400).send("Please inform the task title.")
    }

    toDos.push({
        userId: userId,
        id: Date.now(),
        title: taskTitle,
        completed:false
    })

    res.status(201).send(toDos)
})


// Exercicio 6
app.put("/todos", (req:Request, res:Response)=>{
    const newStatus = req.body.newStatus
    const taskId = req.body.taskId

    if (newStatus !== true && newStatus !== false) {
        res.status(400).send("Please inform the task new status.")
    }
    if (!taskId) {
        res.status(400).send("Please inform the task ID.")
    }

    for (const i of toDos) {
        if (i.id === taskId) {
            i.completed = newStatus
        }
    }

    res.status(200).send(toDos)
})


// Exercicio 7
app.delete("/todos/:taskId", (req:Request, res:Response)=>{
    const taskId = Number(req.params.taskId)

    if (!taskId) {
        res.status(400).send("Please inform the task ID.")
    }

    const filteredTasks = toDos.filter(item => {
        return item.id !== taskId
    })

    res.status(200).send(filteredTasks)
})


// Exercicio 8
app.get("/todos/user", (req:Request, res:Response)=>{
    const userId = Number(req.query.userId)

    if (!userId) {
        res.status(400).send("Please inform the user ID.")
    }

    const filteredTasks = toDos.filter(item => {
        return item.userId === userId
    })

    res.status(200).send(filteredTasks)
})


// Exercicio 9
// https://documenter.getpostman.com/view/22376211/2s8YKAoQMp


// Exercicio 10
type newFormatType = {
    todos:{
        selectedUser:toDo[],
        others:toDo[]
    }
}

let tasksNewFormat:newFormatType

app.get("/todos/user/new_format", (req:Request, res:Response)=>{
    const userId = Number(req.query.userId)

    if (!userId) {
        res.status(400).send("Please inform the user ID.")
    }

    const userTasks = toDos.filter(item => {
        return item.userId === userId
    })
    const othersTasks = toDos.filter(item => {
        return item.userId !== userId
    })

    tasksNewFormat = {
        todos: {
            selectedUser:userTasks,
            others:othersTasks
        }
    }

    res.status(200).send(tasksNewFormat)
})


// Exercicio 11
// app.post("/todos/save2File", (req:Request, res:Response)=> {
//     const userId = req.body.userId
//     const taskTitle = req.body.title

//     if (!userId) {
//         res.status(400).send("Please inform user ID.")
//     }
//     if (!taskTitle) {
//         res.status(400).send("Please inform the task title.")
//     }

//     toDos.push({
//         userId: userId,
//         id: Date.now(),
//         title: taskTitle,
//         completed:false
//     })

    
    // try {
    //     // fs.writeFileSync("F:/Rafael/Coding/Labenu Exercises/Git/lamarr-Rafael-Castro/modulo5/aprofundamento-express/src/data.txt", toDos)
    //     fs.writeFileSync(join("./src", "data.txt"), toDos)
    // } catch (err) {
    //     console.log(err)
    // }

    // console.log(toDos)
    
    // fs.writeFile("data.txt", toDos, function (error) {
    //     if (error) return console.log(error)
    //     console.log('ok')
        
    // })

//     res.status(201).send()
// })


app.listen(3003, () => {
    console.log("Server connected.")
})
