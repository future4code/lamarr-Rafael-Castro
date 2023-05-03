import { validateCharacter } from "../src/validateCharacter"
import { Player } from "../src/player"

describe.skip("Testing validadeCharacter function", () => {
    // 2a.
    test("Testing player with empty name", () => {
        const player1:Player = {
            name:"",
            life: 1000,
            defense: 50,
            strength: 10}

            const result = validateCharacter(player1)
            expect(result).toBe(false)
        })
    
    // 2b.
    test("Testing player with 0 life", () => {
        const player2:Player = {
            name:"Jack",
            life: 0,
            defense: 50,
            strength: 10}

            const result = validateCharacter(player2)
            expect(result).toBe(false)
        })
    
    // 2c.
    test("Testing player with 0 strength", () => {
        const player3:Player = {
            name:"Jack",
            life: 1000,
            defense: 50,
            strength: 0}

            const result = validateCharacter(player3)
            expect(result).toBe(false)
        })
    
    // 2d.
    test("Testing player with 0 defense", () => {
        const player4:Player = {
            name:"Jack",
            life: 1000,
            defense: 0,
            strength: 10}

            const result = validateCharacter(player4)
            expect(result).toBe(false)
        })
    
    // 2e1.
    test("Testing player with negative strength", () => {
        const player5:Player = {
            name:"Jack",
            life: 1000,
            defense: 50,
            strength: -10}

            const result = validateCharacter(player5)
            expect(result).toBe(false)
        })
    
    // 2e2.
    test("Testing player with negative life", () => {
        const player6:Player = {
            name:"Jack",
            life: -1000,
            defense: 50,
            strength: 10}

            const result = validateCharacter(player6)
            expect(result).toBe(false)
        })
    
    // 2e3.
    test("Testing player with negative defense", () => {
        const player7:Player = {
            name:"Jack",
            life: 1000,
            defense: -50,
            strength: 10}

            const result = validateCharacter(player7)
            expect(result).toBe(false)
        })
    
    // 2f.
    test("Testing player with valid data", () => {
        const player8:Player = {
            name:"Jack",
            life: 1000,
            defense: 50,
            strength: 10}

            const result = validateCharacter(player8)
            expect(result).toBe(true)
        })
})