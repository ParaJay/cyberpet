const {Pet} = require("./pet.js");

class Fish extends Pet {
    constructor(name) {
        super(name);

        this.speech = "blub blub";
        this.food = "fish food";
    }
}

module.exports = {
    Fish
}