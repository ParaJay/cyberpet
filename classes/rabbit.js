const {Pet} = require("./pet.js");

class Rabbit extends Pet {
    constructor(name) {
        super(name);

        this.speech = "...";
        this.food = "carrots";
    }
}

module.exports = {
    Rabbit
}