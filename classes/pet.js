class Pet {
    constructor(name) {
        this.name = name;
        this.type = this.constructor.name;
        this.health = 100;
        this.hunger = 100;
        this.energy = 100;
        this.thirst = 100;
    }

    speak() {
        console.log(`${this.name} says: ${this.speech}`);
    }

    eat() {
        this.hunger += 10;

        console.log(`${this.name} ate some ${this.food}`);
    }

    drink() {
        this.thirst += 10;

        console.log (`${this.name} quenched their thirst `)

    }

    rest() {
        this.health += 10;
        this.energy += 20;

        console.log(`${this.name} is sleeping zzzzz`);
    }

    play() {
        this.energy -= 10;
        this.hunger -= 10;

        console.log(`${this.name} is playing with a ball`);
    }

    interact() {
        this.health += 10;
        this.energy -= 10;

        this.speak();
    }

    inspect() {
        console.table({pet: this});
    }
}

module.exports = {
    Pet
}