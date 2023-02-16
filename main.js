const inquirer = require("inquirer");
const {Cat} = require("./classes/cat.js");
const {Dog} = require("./classes/dog.js");
const {Fish} = require("./classes/fish.js");
const {Rabbit} = require("./classes/rabbit.js");

const types = ["Cat", "Dog", "Rabbit", "Fish"];
const actions = ["Feed", "Give Drink", "Play", "Interact", "Rest", "Inspect", "Exit"];
const yesno = ["Yes", "No"];

var pet;

function createListQuestion(message, choices) {
	return { 
        name: "decision",
        type: "list", 
        message: message, 
        choices: choices
     }
}

function createBasicQuestion(message) {
	return {
        name: "decision", 
        message: message
     };
}

const petQuestion = createListQuestion("What type of pet would you like?", types);
const nameQuestion = createBasicQuestion("What is your pet called?");
const actionQuestion = createListQuestion("What would you like to do?", actions);
const exitQuestion = createListQuestion("Are you sure you want to exit? All progress will be lost!", yesno);

async function getResponse(question) {
	let {decision} = await inquirer.prompt(question);

	return decision;
}

function createPetInstance(type, name) {
    return eval(`new ${type}('${name}');`);
    //new Cat("Max");
}

async function petPrompt() {
    let petType = await getResponse(petQuestion);
    let name;

    while(!name) {
        name = (await getResponse(nameQuestion)).trim();
    }
    
    pet = createPetInstance(petType, name);

    actionPrompt();
}

async function actionPrompt() {
    let action = await getResponse(actionQuestion);

    if(action == "Feed") {
        pet.eat();
    } else if(action == "Give Drink") {
        pet.drink();
    } else if(action == "Play") {
        pet.play();
    } else if(action == "Interact") {
        pet.interact();
    } else if(action == "Rest") {
        pet.rest();
    } else if(action == "Inspect") {
        pet.inspect();
    } else {
        let exit = await getResponse(exitQuestion);

        if(exit == "Yes") {
            return;
        }
    }

    actionPrompt();
}

petPrompt();