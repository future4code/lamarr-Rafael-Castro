import { performPurchase } from "../src/functions/purchase"

describe("Tests on purchase function", () => {
    const user: User = {
        name: "Jack",
        balance: 100
    }

    test("Testing balance greater than value", () => {
        const result = performPurchase(user, 20)

        expect(result).toEqual({
            name: "Jack",
            balance: 80
        })
    })

    test("Testing balance equal to value", () => {
        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Jack",
            balance: 0
        })
    })

    test("Testing value greater then balance", () =>{
        const result = performPurchase(user, 150)

        expect(result).not.toBeDefined()
    })
})

