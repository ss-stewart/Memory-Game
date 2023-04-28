// CACHED VARIABLES
const gameNums = document.getElementById('gameNums');
const cardFront = document.getElementsByClassName('cardFront');
const timer = document.querySelector('#timer');
const instructionMsg = document.getElementById("msg");
const startButton = document.getElementById('startGameBtn');
const restartButton = document.getElementById('playAgainBtn');
const checkAnsButton = document.getElementById('checkPlayAnsBtn');
const gameNumbers = '';

// EVENT LISTENERS
startButton.addEventListener('click', init);
restartButton.addEventListener('click', init);
checkAnsButton.addEventListener('click', compareNums);

// play button must start the timer and generate random numbers
function init () {
    instructionMsg.style.display = 'none';
    generateNums(); 
    startTimer();
}

// get 5 random numbers
function generateNums () {
    console.log('functionRan')
    instructionMsg.style.display = 'block';
    // Create an empty array for 5 items
    var fiveRandInt = [];
    // Start a loop and run it 5 times        
    for(i = 0; i < 5; i++) {
        fiveRandInt[i] = Math.floor( Math.random() * 99);
    }
    gameNums.textContent = fiveRandInt;       
}

// Start the timer; when timer ends, alert player
function startTimer() {
    let seconds = 10;
    let intervalId = setInterval(function() {
        timer.innerHTML = `Timer: ${seconds}s`;
        seconds--;
        if (seconds < 0) {
            clearInterval(intervalId);
            timer.innerHTML = 'Time is up! Enter the numbers';
            gameNums.style.display = 'none'
        }
    }, 1000);
}    
 
// Allow player to check their answer using a button
    // display conditional message to tell player how they did    
function compareNums() {
    gameNums.style.display = 'flex'
    const playerInput = document.querySelector('input').value;
    console.log(playerInput)
    let playerInputArr = playerInput;
        console.log(playerInputArr)
        console.log("this is gameNums", gameNums)
    if (playerInputArr === gameNums.textContent) {
        gameNums.textContent = 'You got them all! Way to go, Einstein';
    } else {
        gameNums.textContent = 'I bet you leave your keys in the fridge...';
    }
}