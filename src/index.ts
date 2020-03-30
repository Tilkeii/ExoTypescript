import { Pokemon, wichPokemonStarts } from "./pokemon";

let pikachu = new Pokemon("Pikachu", 100, 274, 400, 209, 179);
let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);
console.log('Pikachu created : ', pikachu);
console.log('Dracaufeu created : ', dracaufeu);

console.log('Who is starting ? :', wichPokemonStarts(pikachu, dracaufeu).name);

pikachu.attack(dracaufeu);
console.log('Pikachu attack Dracaufeu');

console.log(pikachu, dracaufeu);