export class Pokemon {
    name: string;
    health: number;
    speed: number;
    damage: number;

    constructor(name: string, health: number, speed: number, damage: number) {
        this.name = name;
        this.speed = speed;
        this.health = health;
        this.damage = damage;
    }

    public attack(enemyPokemon: Pokemon): void {
        enemyPokemon.health = enemyPokemon.health - this.damage;
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