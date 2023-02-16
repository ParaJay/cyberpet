const {Pet} = require("./pet.js");

class Cat extends Pet {
    constructor(name) {
        super(name);

        this.speech = "meow";
        this.food = "chicken";
    }
}

module.exports = {
    Cat
}
