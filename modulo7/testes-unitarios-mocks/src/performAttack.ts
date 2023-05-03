import { Player } from "./player"
import { validateCharacter } from "./validateCharacter"

/* Essa implementação aplica a função validateCharacter diretamente na
implementação. Esse modo demanda a importação da função, gerando uma dependência. */
export const performAttack2 = (
    attacker: Player,
    defender: Player) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid Character")
    }
    if (defender.defense < attacker.strength) {
        defender.life -= attacker.strength - defender.defense
    }
}


/*  Essa implementação usa a injeção de dependência, não sendo necessária a
importação da função no documento. Esse tipo de implementação visa a
arquitetura limpa. */
export const performAttack1 = (
    attacker: Player,
    defender: Player,
    validadeCharacter: (player: Player) => boolean) => {
    if (!validadeCharacter(attacker) || !validadeCharacter(defender)) {
        throw new Error("Invalid Character")
    }
    if (defender.defense < attacker.strength) {
        defender.life -= attacker.strength - defender.defense
    }
}