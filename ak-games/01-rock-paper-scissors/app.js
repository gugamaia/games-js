const pcChoiseDisplay = document.getElementById('pc-choise');
const userChoiseDisplay = document.getElementById('your-choise');
const resultDisplay = document.getElementById('result');

const possibleChoises = document.querySelectorAll('button');

let userChoise;
let pcChoise;
let result;

possibleChoises.forEach(possibleChoises => possibleChoises.addEventListener('click', (e) => {
    userChoise = e.target.id;
    userChoiseDisplay.innerHTML = userChoise;

    generatePcChoise();
    getResult();
}))

function generatePcChoise() {
    const randomNumber = Math.floor(Math.random() * 5);
    
    if (randomNumber === 0) {
        pcChoise = 'rock';
    }
    if (randomNumber === 1) {
        pcChoise = 'paper';
    }
    if (randomNumber === 2) {
        pcChoise = 'scissors';
    }
    if (randomNumber === 3) {
        pcChoise = 'lizard';
    }
    if (randomNumber === 4) {
        pcChoise = 'spock';
    }
    pcChoiseDisplay.innerHTML = pcChoise;
}

function getResult() {
    if(pcChoise === userChoise) {
        result = 'Draw!!';
    }
    if(pcChoise === 'rock' && userChoise === 'scissors') {
        result = 'You lose, Loser!!';
    }
    if(pcChoise === 'rock' && userChoise === 'lizard') {
        result = 'You lose, Loser!!';
    }
    if(pcChoise === 'rock' && userChoise === 'paper') {
        result = 'Luck you!!';
    }
    if(pcChoise === 'rock' && userChoise === 'spock') {
        result = 'Luck you!!!';
    }

    if(pcChoise === 'paper' && userChoise === 'scissors') {
        result = 'Luck you!!!';
    }
    if(pcChoise === 'paper' && userChoise === 'lizard') {
        result = 'Luck you!!!';
    }
    if(pcChoise === 'paper' && userChoise === 'rock') {
        result = 'Paper wraps the rock. Loser!!';
    }
    if(pcChoise === 'paper' && userChoise === 'spock') {
        result = 'Paper refutes Spock!! See yeah';
    }

    if(pcChoise === 'scissors' && userChoise === 'rock') {
        result = 'Luck you!';
    }
    if(pcChoise === 'scissors' && userChoise === 'lizard') {
        result = 'I chop your lizards neck!!!Lose, Loser!!';
    }
    if(pcChoise === 'scissors' && userChoise === 'paper') {
        result = 'scissorss cuts paper!! You lose.';
    }
    if(pcChoise === 'scissors' && userChoise === 'spock') {
        result = 'Luck you!!!';
    }

    if(pcChoise === 'lizard' && userChoise === 'scissors') {
        result = 'Luck you!!';
    }
    if(pcChoise === 'lizard' && userChoise === 'rock') {
        result = 'Luck you!!';
    }
    if(pcChoise === 'lizard' && userChoise === 'paper') {
        result = 'Lizard eats the paper!! You lose!';
    }
    if(pcChoise === 'lizard' && userChoise === 'spock') {
        result = 'Lizard poisons Spock, L+O+S+E+R!!!';
    }

    if(pcChoise === 'spock' && userChoise === 'scissors') {
        result = 'Spock melts scissorss!! You lose, Loser!!';
    }
    if(pcChoise === 'spock' && userChoise === 'lizard') {
        result = 'Luck you!!!';
    }
    if(pcChoise === 'spock' && userChoise === 'paper') {
        result = 'Luck you!!';
    }
    if(pcChoise === 'spock' && userChoise === 'rock') {
        result = 'Spock vaporizes your rock! You lose, Loser!!';
    }
    resultDisplay.innerHTML = result;
}
