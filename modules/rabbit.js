

class Rabbit {
    #name
    #energyLevel
    #happinessLevel


    constructor(name) {
        this.#name = name
        this.#energyLevel = 10
        this.#happinessLevel = 10
        this.createRabbit()

    }

    createRabbit() {

        const tamagotchiContainer = document.getElementById('tamagotchi-container')
        const rabbitContainer = document.createElement('div')
        rabbitContainer.classList.add('rabbit-container')
        tamagotchiContainer.appendChild(rabbitContainer)
        const rabbitHeadline = document.createElement('h3')
        rabbitHeadline.innerText = this.#name + ' the Rabbit'
        const rabbitEnergyPar = document.createElement('p')
        rabbitEnergyPar.innerText = 'Energy level: ' + this.#energyLevel
        const rabbithappinessPar = document.createElement('p')
        rabbithappinessPar.innerText = 'happiness level: ' + this.#happinessLevel
        const feedBtn = document.createElement('button')
        feedBtn.innerHTML = 'Feed'
        const playBtn = document.createElement('button')
        playBtn.innerHTML = 'Play'
        rabbitContainer.append(rabbitHeadline, rabbitEnergyPar, rabbithappinessPar, feedBtn, playBtn)
        this.levelCounters(rabbitEnergyPar, rabbithappinessPar, rabbitContainer, rabbitHeadline)
        feedBtn.addEventListener(
            "click",
            () => {
                this.#energyLevel++;

                if (this.#energyLevel > 10) {
                    this.#energyLevel = 10

                }
                if (this.#energyLevel > 3) {
                    rabbitEnergyPar.style.color = 'black'
                }
                rabbitEnergyPar.innerHTML = 'Energy level: ' + this.#energyLevel
            })
        playBtn.addEventListener(
            "click",
            () => {
                this.#happinessLevel++;
                if (this.#happinessLevel > 10) {
                    this.#happinessLevel = 10
                }
                if (this.#happinessLevel > 3) {
                    rabbithappinessPar.style.color = 'black'
                }
                rabbithappinessPar.innerHTML = 'Happiness level: ' + this.#happinessLevel
            })



    }


    levelCounters(rabbitEnergyPar, rabbithappinessPar, rabbitContainer, rabbitHeadline) {
        const energyCounter = setInterval(() => {
            this.#energyLevel--
            rabbitEnergyPar.innerHTML = 'Energy level: ' + this.#energyLevel
            if (this.#energyLevel < 4) {
                rabbitEnergyPar.style.color = 'red'


            }

            if (this.#energyLevel < 1) {
                rabbitContainer.innerHTML = ''
                rabbitContainer.style.backgroundColor = 'black'
                rabbitHeadline.innerText = this.#name + ' died from starvation. R.I.P.'
                rabbitHeadline.style.color = 'white'
                rabbitContainer.append(rabbitHeadline)

                stopCounters()
            }

        }, 1500);

        const happinessCounter = setInterval(() => {
            this.#happinessLevel--
            rabbithappinessPar.innerHTML = 'Happiness level: ' + this.#happinessLevel
            if (this.#happinessLevel < 4) {
                rabbithappinessPar.style.color = 'red'
            }

            if (this.#happinessLevel < 1) {
                rabbitContainer.innerHTML = ''
                rabbitContainer.style.backgroundColor = 'black'
                rabbitHeadline.innerText = this.#name + ' died from sadness. R.I.P.'
                rabbitHeadline.style.color = 'white'
                rabbitContainer.append(rabbitHeadline)

                stopCounters()

            }
        }, 1000);

        function stopCounters() {
            clearInterval(happinessCounter)
            clearInterval(energyCounter)

        }
    }


}



export { Rabbit }


