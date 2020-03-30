import { Pokemon, wichPokemonStarts } from './pokemon';

describe('Starting Pokemon', () => {

    it('should return Pikachu as the expected starting pokemon', () => {
        let pikachu = new Pokemon("Pikachu", 100, 250, 5);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 100, 2);
        expect(wichPokemonStarts(pikachu, dracaufeu)).toEqual(pikachu);
    })

    it('should return Dracaufeu as the expected starting pokemon', () => {
        let pikachu = new Pokemon("Pikachu", 100, 50, 5);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 100, 2);
        expect(wichPokemonStarts(pikachu, dracaufeu)).toEqual(dracaufeu);
    })

    it('should Dracaufeu take 5 damage from Pikachu', () => {
        let pikachu = new Pokemon("Pikachu", 100, 250, 5);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 100, 2);
        pikachu.attack(dracaufeu);
        expect(dracaufeu.health).toBe(95);
    })

})