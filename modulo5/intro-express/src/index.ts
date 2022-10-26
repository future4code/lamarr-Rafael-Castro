import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


// Exercicio 1)
app.get("/", (req, res) => {
    res.status(200).send('ok')
})


// Exercicio 2)
type user = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}


//  Exercicio 3)
const arrayUsers: user[] = [
    {
        id: 1,
        name: "Hugh Janus",
        phone: 11111,
        email: "hugh@janus.com",
        website: "hugh_janus.com"
    },
    {
        id: 2,
        name: "Phil Mcrackin",
        phone: 22222,
        email: "phil@mcracking.com",
        website: "phil_mcracking.com"
    },
    {
        id: 3,
        name: "Mike Oxmol",
        phone: 33333,
        email: "mike@oxmol.com",
        website: "mike_oxmol.com"
    },
    {
        id: 4,
        name: "Rob Mopucy",
        phone: 44444,
        email: "rob@mopucy.com",
        website: "rob_mopucy.com"
    },
    {
        id: 5,
        name: "Jack Meof",
        phone: 55555,
        email: "jack@meof.com",
        website: "jack_meof.com"
    }
]

// Exercicio 4)
app.get("/users", (req, res) => {
    res.status(200).send(arrayUsers)
})


// Exercicio 5)
type post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// Exericio 6)
// Acho mais adequado criar o array de posts fora do array de users. Assim fica mais facil
// acessa-los e executar qualquer alteração.
const arrayPosts: post[] = [
    {
        id: 1,
        title: "Stairway to Heaven",
        body: "There's a lady who's sure...",
        userId: 1
    },
    {
        id: 2,
        title: "Be my Devil",
        body: "I'm just a soul that lost its light...'",
        userId: 2
    },
    {
        id: 3,
        title: "Evil Ways",
        body: "It's been so long.. Long hard days...",
        userId: 3
    },
    {
        id: 4,
        title: "Bad Things",
        body: "I was standin' by the river, watching my bridge burn down...",
        userId: 4
    },
    {
        id: 5,
        title: "My Wicked Bones",
        body: "Some call me a sinner.. For the things I've done...",
        userId: 5
    },
    {
        id: 6,
        title: "The River",
        body: "You're my Lord, take this soul.. Lay me at the bottom of the river...",
        userId: 3
    },
    {
        id: 7,
        title: "Slow Farewell",
        body: "The winds are whispering a name...",
        userId: 1
    },
]

//  Exercicio 7)
app.get("/posts", (req, res) => {
    res.status(200).send(arrayPosts)
})


// Exercicio 8)
app.get("/user/posts", (req, res) => {
    const userId = Number(req.query.userId)

    if (!userId) {
        res.status(400).send("Please inform user ID.")
    }

    const postsFiltered = arrayPosts.filter(item => {
        return item.userId === userId
    })

    res.status(200).send(postsFiltered)
})


// Exercicio 9)
app.delete("/post", (req, res) => {
    const postId = Number(req.query.postId)

    if (!postId) {
        res.status(400).send("Please inform post ID.")
    }

    let remainingPosts = arrayPosts.filter(item => {
        return item.id !== postId
    })
    res.status(200).send(remainingPosts)
})


// Exercicio 10)
app.delete("/user", (req, res) => {
    const userId = Number(req.query.userId)

    if (!userId) {
        res.status(400).send("Please inform user ID.")
    }

    let remainingUsers = arrayUsers.filter(item => {
        return item.id !== userId
    })
    res.status(200).send(remainingUsers)
})


// Exercicio 11)


app.listen(3003, () => {
    console.log("Server is running.")
})