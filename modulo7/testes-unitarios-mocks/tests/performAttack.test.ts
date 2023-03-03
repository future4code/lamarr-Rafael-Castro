/* 4a. Devemos criar uma função Mock da validateCharacter
pois assim testaremos apenas a função performAttack independentemente. */

import { performAttack1 } from "../src/performAttack"
import { Player } from "../src/player"

describe("Testing performAttack function", () => {
    test("Success attack", () => {
        expect.assertions(11)
        const validateSuccess = jest.fn(() => {
            return true
        })

        const attacker: Player = {
            name: "Jack",
            life: 1000,
            defense: 50,
            strength: 250
        }

        const defender: Player = {
            name: "Mike",
            life: 1000,
            defense: 50,
            strength: 10
        }

        const result = performAttack1(attacker, defender, validateSuccess)
        expect(defender.life).toBe(800)
        expect(validateSuccess).toBeCalled()
        expect(validateSuccess).toHaveBeenCalledTimes(2)
        expect(validateSuccess).toReturnTimes(2)
        expect(defender).toEqual({
            name: "Mike",
            life: 800,
            defense: 50,
            strength: 10
        })
        expect(attacker).toEqual({
            name: "Jack",
            life: 1000,
            defense: 50,
            strength: 250
        })
        expect(result).toBeUndefined()
        expect(validateSuccess).toBeCalledWith(attacker)
        expect(validateSuccess).toBeCalledWith(defender)
        expect(validateSuccess).lastReturnedWith(true)
        expect(validateSuccess()).toBeTruthy()
    })

    test("Failure failure", () => {
        expect.assertions(6)
        const validateFailure = jest.fn(() => {
            return false
        })

        const attacker: Player = {
            name: "Jack",
            life: -1000,
            defense: 50,
            strength: 250
        }

        const defender: Player = {
            name: "Mike",
            life: 1000,
            defense: 50,
            strength: 10
        }

        try {
            const result = performAttack1(attacker, defender, validateFailure)
        } catch (error: any) {
            expect(error.message).toBe("Invalid Character")
            expect(validateFailure).toBeCalled()
            expect(validateFailure).toHaveBeenCalledTimes(1)
            expect(validateFailure).toReturnTimes(1)
            expect(validateFailure).lastReturnedWith(false)
            expect(validateFailure()).toBeFalsy()
        }
    })
})