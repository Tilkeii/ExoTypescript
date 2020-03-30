import { Pokemon, wichPokemonStarts } from './pokemon';

describe('Starting Pokemon', () => {

    it('should return Pikachu as the expected starting pokemon', () => {
        let pikachu = new Pokemon("Pikachu", 100, 274, 400, 209, 179);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);
        expect(wichPokemonStarts(pikachu, dracaufeu)).toEqual(pikachu);
    })

    it('should return Dracaufeu as the expected starting pokemon', () => {
        let pikachu = new Pokemon("Pikachu", 100, 274, 279, 209, 179);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);
        expect(wichPokemonStarts(pikachu, dracaufeu)).toEqual(dracaufeu);
    })

    it('should Dracaufeu take damage from Pikachu', () => {
        let pikachu = new Pokemon("Pikachu", 100, 274, 279, 209, 179);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);
        pikachu.attack(dracaufeu);
        expect(dracaufeu.health).toBe(317);
    })

})