import { Rabbit } from "./modules/rabbit.js";
import { Turtle } from "./modules/turtle.js";

const nameInput = document.getElementById('name-input')
const selectMenu = document.getElementById('select-menu')
const createBtn = document.getElementById('create-button')

createBtn.addEventListener('click', createTamagotchi)

function createTamagotchi(event) {
    event.preventDefault()

    if (nameInput.value == '') {
        alert("Don't forget to name you tamagotchi")
    }

    else {
        if (selectMenu.value == "Rabbit") {
            const newRabbit = new Rabbit(nameInput.value)
        }

        else {
            const newTurtle = new Turtle(nameInput.value)
        }
    }

    nameInput.value = ''



}

//const nisse = new Rabbit('Nisse')
//const pisse = new Rabbit('Pisse')   







