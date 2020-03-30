import { Pokemon, wichPokemonStarts } from "./pokemon";

let pikachu = new Pokemon("Pikachu", 100, 274, 400, 209, 179);
let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);

export function loop(): void {
    let { firstPokemon, secondPokemon } = wichPokemonStarts(pikachu, dracaufeu);
    turn(firstPokemon, secondPokemon);
    if(firstPokemon.health <= 0 || secondPokemon.health <= 0) {
        console.log('Winner : ', firstPokemon.health > 0 ? firstPokemon.name : secondPokemon.name);
        console.log('Game finished');
        clearInterval(interval);
    }
}

export function turn(firstPokemon: Pokemon, secondPokemon: Pokemon): void {
    firstPokemon.attack(secondPokemon);
    secondPokemon.attack(firstPokemon);
}

let interval = setInterval(loop, 1000);
loop();
