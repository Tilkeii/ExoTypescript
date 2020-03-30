export class Pokemon {
    name: string;
    speed: number;

    constructor(name: string, speed: number = 0) {
        this.name = name;
        this.speed = speed;
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