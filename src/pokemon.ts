class Pokemon {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let pikachu = new Pokemon("Pikachu");
console.log("Name : ", pikachu.name);