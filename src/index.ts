import { Pokemon, wichPokemonStarts } from "./pokemon";

let pikachu = new Pokemon("Pikachu", 100, 250, 5);
let dracaufeu = new Pokemon("Dracaufeu", 100, 100, 2);

console.log(wichPokemonStarts(pikachu, dracaufeu));

pikachu.attack(dracaufeu);

console.log(pikachu, dracaufeu);