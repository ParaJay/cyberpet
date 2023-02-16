const {Pet} = require("./pet.js");

class Dog extends Pet {
    constructor(name) {
        super(name);

        this.speech = "woof";
        this.food = "beef";
    }
}

module.exports = {
    Dog
}