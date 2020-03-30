import { Pokemon, wichPokemonStarts } from './pokemon';

describe('Starting Pokemon', () => {

    it('should return Pikachu as the expected starting pokemon', () => {
        let pikachu = new Pokemon("Pikachu", 250);
        let dracaufeu = new Pokemon("Dracaufeu", 100);
        expect(wichPokemonStarts(pikachu, dracaufeu)).toEqual(pikachu);
    })

    it('should return Dracaufeu as the expected starting pokemon', () => {
        let pikachu = new Pokemon("Pikachu", 50);
        let dracaufeu = new Pokemon("Dracaufeu", 100);
        expect(wichPokemonStarts(pikachu, dracaufeu)).toEqual(dracaufeu);
    })

})