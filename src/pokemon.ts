export class Pokemon {
    name: string;
    level: number;
    health: number;
    speed: number;
    offensiveStat: number;
    defensiveStat: number;

    constructor(
        name: string,
        level: number,
        health: number,
        speed: number,
        offensiveStat: number,
        defensiveStat: number
    ) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.speed = speed;
        this.offensiveStat = offensiveStat;
        this.defensiveStat = defensiveStat;
    }

    public attack(enemyPokemon: Pokemon): void {
        const { defensiveStat } = enemyPokemon;
        let damage: number = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.offensiveStat * 60 / defensiveStat) / 50) + 2; // 60 equals to base power from the spell
        enemyPokemon.health = enemyPokemon.health - damage;
    }
}

export function wichPokemonStarts(pokemonA: Pokemon, pokemonB: Pokemon): Pokemon {
    if(pokemonA.speed > pokemonB.speed)
        return pokemonA;
    else if(pokemonA.speed < pokemonB.speed)
        return pokemonB;
    else
        return Math.random() >= 0.5 ? pokemonA : pokemonB;
}