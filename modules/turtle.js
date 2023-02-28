

class Turtle {
    #name
    #energyLevel
    #happinessLevel


    constructor(name) {
        this.#name = name
        this.#energyLevel = 10
        this.#happinessLevel = 10
        this.createTurtle()

    }

    createTurtle() {

        const tamagotchiContainer = document.getElementById('tamagotchi-container')
        const turtleContainer = document.createElement('div')
        turtleContainer.classList.add('turtle-container')
        tamagotchiContainer.appendChild(turtleContainer)
        const turtleHeadline = document.createElement('h3')
        turtleHeadline.innerText = this.#name + ' the Turtle'
        const turtleEnergyPar = document.createElement('p')
        turtleEnergyPar.innerText = 'Energy level: ' + this.#energyLevel
        const turtlehappinessPar = document.createElement('p')
        turtlehappinessPar.innerText = 'happiness level: ' + this.#happinessLevel
        const feedBtn = document.createElement('button')
        feedBtn.innerHTML = 'Feed'
        const playBtn = document.createElement('button')
        playBtn.innerHTML = 'Play'
        turtleContainer.append(turtleHeadline, turtleEnergyPar, turtlehappinessPar, feedBtn, playBtn)
        this.levelCounters(turtleEnergyPar, turtlehappinessPar, turtleContainer, turtleHeadline)
        feedBtn.addEventListener(
            "click",
            () => {
                this.#energyLevel++;

                if (this.#energyLevel > 10) {
                    this.#energyLevel = 10

                }
                if (this.#energyLevel > 3) {
                    turtleEnergyPar.style.color = 'black'

                }
                turtleEnergyPar.innerHTML = 'Energy level: ' + this.#energyLevel
            })
        playBtn.addEventListener(
            "click",
            () => {
                this.#happinessLevel++;
                if (this.#happinessLevel > 10) {
                    this.#happinessLevel = 10
                }
                if (this.#happinessLevel > 3) {
                    turtlehappinessPar.style.color = 'black'

                }
                turtlehappinessPar.innerHTML = 'Happiness level: ' + this.#happinessLevel
            })

    }


    levelCounters(turtleEnergyPar, turtlehappinessPar, turtleContainer, turtleHeadline) {
        const energyCounter = setInterval(() => {
            this.#energyLevel--
            turtleEnergyPar.innerHTML = 'Energy level: ' + this.#energyLevel
            if (this.#energyLevel < 4) {
                turtleEnergyPar.style.color = 'red'

            }

            if (this.#energyLevel < 1) {
                turtleContainer.innerHTML = ''
                turtleContainer.style.backgroundColor = 'black'
                turtleHeadline.innerText = this.#name + ' died from starvation. R.I.P.'
                turtleHeadline.style.color = 'white'
                turtleContainer.append(turtleHeadline)

                stopCounters()
            }

        }, 1500);

        const happinessCounter = setInterval(() => {
            this.#happinessLevel--
            turtlehappinessPar.innerHTML = 'Happiness level: ' + this.#happinessLevel
            if (this.#happinessLevel < 4) {
                turtlehappinessPar.style.color = 'red'
            }

            if (this.#happinessLevel < 1) {
                turtleContainer.innerHTML = ''
                turtleContainer.style.backgroundColor = 'black'
                turtleHeadline.innerText = this.#name + ' died from sadness. R.I.P.'
                turtleHeadline.style.color = 'white'
                turtleContainer.append(turtleHeadline)

                stopCounters()

            }
        }, 1000);

        function stopCounters() {
            clearInterval(happinessCounter)
            clearInterval(energyCounter)

        }
    }

}



export { Turtle }


