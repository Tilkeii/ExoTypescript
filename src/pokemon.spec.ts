import { Pokemon, wichPokemonStarts, OrderTurn } from './pokemon';

describe('Starting Pokemon', () => {

    it('should return Pikachu as the expected starting pokemon', () => {
        let pikachu = new Pokemon("Pikachu", 100, 274, 400, 209, 179);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);
        expect(wichPokemonStarts(pikachu, dracaufeu))
            .toEqual({firstPokemon: pikachu, secondPokemon: dracaufeu} as OrderTurn);
    })

    it('should return Dracaufeu as the expected starting pokemon', () => {
        let pikachu = new Pokemon("Pikachu", 100, 274, 279, 209, 179);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);
        expect(wichPokemonStarts(pikachu, dracaufeu))
            .toEqual({firstPokemon: dracaufeu, secondPokemon: pikachu} as OrderTurn);
    })

    it('should Dracaufeu take damage from Pikachu', () => {
        let pikachu = new Pokemon("Pikachu", 100, 274, 279, 209, 179);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);
        pikachu.attack(dracaufeu);
        expect(dracaufeu.health).toBe(317);
    })

    it('should Pikachu take damage from Dracaufeu', () => {
        let pikachu = new Pokemon("Pikachu", 100, 274, 279, 209, 179);
        let dracaufeu = new Pokemon("Dracaufeu", 100, 360, 299, 267, 255);
        dracaufeu.attack(pikachu);
        expect(pikachu.health).toBe(197);
    })

})