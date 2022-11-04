import express, { Request, Response } from "express"
import cors from 'cors'
import { products } from "./data"
import { Product } from "./type"

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1
app.get("/test", (req: Request, res: Response) => {
    res.sendStatus(200).send('Servidor rodando na porta 3003!')
})

// Exercicio 2
// data.ts criado

// Exercicio 3
// type.ts criado

// Exercicio 4
app.post("/products", (req: Request, res: Response) => {
    const productName = req.body.name
    const productPrice = Number(req.body.price)

    const newProduct: Product = {
        id: Date.now().toString(),
        name: productName,
        price: productPrice
    }

    products.push(newProduct)

    res.status(201).send(products)
})

// Exercicio 5
app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products)
})

// Exercicio 6
app.put("/product", (req: Request, res: Response) => {
    const productId = req.body.id
    const newPrice = req.body.price

    const updatedProducts = products.map(item => {
        if (item.id === productId) {
            item.price = newPrice
        }
        return item
    })
    res.status(200).send(updatedProducts)
})

// Exercicio 7
app.delete("/product/:id", (req: Request, res: Response) => {
    const productId = req.params.id

    const updatedProducts = products.filter(item => item.id !== productId)

    res.status(200).send(updatedProducts)
})


// Exercicio 8
app.post("/products/validation", (req: Request, res: Response) => {
    const productName = req.body.name
    const productPrice = req.body.price

    try {
        if (!productName || !productPrice) {
            const error = new Error("Please inform product name and price.")
            error.name = "identificationError"
            throw error
        }
        if (typeof (productName) !== "string") {
            const error = new Error("Product name is not a string.")
            error.name = "nameNotString"
            throw error
        }
        if (typeof (productPrice) !== "number") {
            const error = new Error("Product price is not a number.")
            error.name = "priceNotNumber"
            throw error
        }
        if (productPrice < 1) {
            const error = new Error("Price needs to be higher than 0.")
            error.name = "lowPrice"
            throw error
        }

        const newProduct: Product = {
            id: Date.now().toString(),
            name: productName,
            price: productPrice
        }

        products.push(newProduct)

        res.status(201).send(products)
    } catch (error: any) {
        if (error.name === "identificationError") {
            res.status(400).send(error.message)
        } else if (error.name = "nameNotString") {
            res.status(400).send(error.message)
        } else if (error.name === "priceNotNumber") {
            res.status(400).send(error.message)
        } else if (error.name === "lowPrice") {
            res.status(400).send(error.message)
        } else {
            res.status(500).send(error.message)
        }
    }
})

// Exercicio 9
app.put("/product/validation", (req: Request, res: Response) => {
    const productId = req.body.id
    const newPrice = req.body.price

    try {

        if (!newPrice) {
            const error = new Error("Please inform new price.")
            error.name = "noNewPrice"
            throw error
        }
        if (typeof (newPrice) !== "number") {
            const error = new Error("New price is not a number.")
            error.name = "priceNotNumber"
            throw error
        }
        if (newPrice < 1) {
            const error = new Error("New price needs to be higher than 0.")
            error.name = "lowPrice"
            throw error
        }

        const findProduct = products.find(item => item.id === productId)
        if (!findProduct) {
            const error = new Error("Product not found.")
            error.name = "productNotFound"
            throw error
        }

        const updatedProducts = products.map(item => {
            if (item.id === productId) {
                item.price = newPrice
            }
            return item
        })
        res.status(200).send(updatedProducts)
    } catch (error: any) {
        if (error.name === "noNewPrice") {
            res.status(400).send(error.message)
        } else if (error.name === "priceNotNumber") {
            res.status(400).send(error.message)
        } else if (error.name === "lowPrice") {
            res.status(400).send(error.message)
        } else if (error.name === "productNotFound") {
            res.status(400).send(error.message)
        } else {
            res.status(500).send(error.message)
        }
    }

})

// Exercicio 10
app.delete("/product/:id/validation", (req: Request, res: Response) => {
    const productId = req.params.id

    try {
        if (!productId) {
            const error = new Error("Invalid product ID.")
            error.name = "invalidProductId"
            throw error
        }

        const findProduct = products.find(item => item.id === productId)
        if (!findProduct) {
            const error = new Error("Product not found.")
            error.name = "productNotFound"
            throw error
        }

        const updatedProducts = products.filter(item => item.id !== productId)

        res.status(200).send(updatedProducts)
    } catch (error: any) {
        if (error.name === "invalidProductId") {
            res.status(400).send(error.message)
        } else if (error.name === "productNotFound") {
            res.status(400).send(error.message)
        } else {
            res.status(500).send(error.message)
        }
    }
})

// Exercicio 11
app.get("/products/validation", (req: Request, res: Response) => {
    const search = req.query.search?.toString().toLocaleLowerCase()
    if (search && search !== undefined) {
        const updatedProducts = products.filter(item => item.name.toLocaleLowerCase().includes(search))
        if (updatedProducts.length > 0) {
            res.status(200).send(updatedProducts)
        } else {
            res.status(400).send('Product not found.')
        }
    } else {
        res.status(200).send(products)
    }
})

// Exercicio 12
app.put("/product/search/validation", (req: Request, res: Response) => {
    const productId = req.body.id
    const productName = req.body.name
    const newPrice = req.body.price

    try {
        if (!productId) {
            const error = new Error("Please inform product ID.")
            error.name = "invalidProductId"
            throw error
        }
        const findProduct = products.find(item => item.id === productId)
        if (!findProduct) {
            const error = new Error("Product not found.")
            error.name = "productNotFound"
            throw error
        }
        if (!productName && !newPrice) {
            const error = new Error("Inform product name or price to update.")
            error.name = "noDataInformed"
            throw error
        }

        if (!productName) {
            const updatedProducts = products.map(item => {
                if (item.id === productId) {
                    item.price = newPrice
                }
                return item
            })
            res.status(200).send(updatedProducts)
        } else if (!newPrice) {
            const updatedProducts = products.map(item => {
                if (item.id === productId) {
                    item.name = productName
                }
                return item
            })
            res.status(200).send(updatedProducts)
        } else {
            const updatedProducts = products.map(item => {
                if (item.id === productId) {
                    item.name = productName
                    item.price = newPrice
                }
                return item
            })
            res.status(200).send(updatedProducts)
        }
    } catch (error: any) {
        if (error.name === "invalidProductId") {
            res.status(400).send(error.message)
        } else if (error.name === "productNotFound") {
            res.status(400).send(error.message)
        } else if (error.name === "noDataInformed") {
            res.status(400).send(error.message)
        }
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})