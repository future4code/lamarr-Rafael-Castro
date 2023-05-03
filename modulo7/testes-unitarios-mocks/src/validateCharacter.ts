import { Player } from "./player"

export const validateCharacter = (player: Player) => {
    if (
        !player.defense ||
        !player.life ||
        !player.strength ||
        !player.name
    ) {
        return false
    } else if (
        player.defense < 1 ||
        player.life < 1 ||
        player.strength < 1
    ) {
        return false
    }
    return true
}