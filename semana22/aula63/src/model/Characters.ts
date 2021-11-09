export interface Character {
    name: string
    healthPoints: number
    actionPoints: number
    defense: number
    
    attack(
        characterActionPoints: number, 
        opponentDefense: number
        ): number
}
