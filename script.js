function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomNumber = getRandomNumber(0, 10)

//pegando o número escolhido pelo cliente
const input = document.querySelector("input")

let chosenNumber;
if(randomNumber == 0) {
        chosenNumber = input.value 
        console.log(chosenNumber)
} else {
    input.addEventListener("input", (e) => {
        chosenNumber = e.target.value
    })  
}



const homeScreen = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const attempts = document.querySelector("span");
const text = document.querySelector("p");
const tryButton = document.querySelector("form button");

//verificando se o cliente adivinhou ou não o numero.
//se sim ele abre uma segunda telinha

let count = 0;
tryButton.addEventListener("click", () => {
    let guessed = randomNumber == chosenNumber

    if(guessed) {
        homeScreen.classList.add("hide");
        screen2.classList.remove("hide");

        count++
        attempts.textContent = count;
    } else if(guessed == false) {

        text.innerHTML = `Advinhe um número entre 0 e 10 
        <br> 
        <span class='red'>Tente novamente, você consegue</span>`

        input.classList.add("notGuessed");
        
    }
    count++;
})

const newGameButton = document.querySelector(".screen2 button");

newGameButton.addEventListener("click", function() {
    location.reload();
})

console.log(randomNumber)