// CACHED VARIABLES
const gameNums = document.getElementById('gameNums');
const cardFront = document.getElementsByClassName('cardFront');
const timer = document.querySelector('#timer');
const instructionMsg = document.getElementById("msg");
const startButton = document.getElementById('startGameBtn');
const restartButton = document.getElementById('playAgainBtn');
const checkAnsButton = document.getElementById('checkPlayAnsBtn');
const gameNumbers = '';
const playerInput = document.querySelector('#playerAnswer');
const WinLossMsg = document.querySelector('#winlossMsg');

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
    /////////// cardFront.innerHTML = fiveRandInt; /////////////////////
    // Create an empty array for 5 items
    var fiveRandInt = [];
    // Start a loop and run it 5 times        
    for(i = 0; i < 5; i++) {
        fiveRandInt[i] = Math.floor( Math.random() * 99);
    }
    gameNums.textContent = 'Remember these numbers in the order they appear: ' + fiveRandInt;
    console.log(fiveRandInt);        
    console.log(cardFront);
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
            gameNums.textContent = '';
        }
    }, 1000);
}    

// Allow player to check their answer using a button
    // display conditional message to tell player how they did    
function compareNums() {
    let playerInputArr = [playerInput];
    compare = (x, y) => playerInputArr.reduce((x, z) => x + gameNumbers.includes(z), 0);
    console.log(compare(playerInputArr, gameNumbers));
    if (compare(playerInputArr, gameNumbers) < 3) {
        WinLossMsg.textContent = 'I bet you leave your keys in the fridge...';
    } else if (compare(playerInputArr, gameNumbers) > 4) {
        WinLossMsg.textContent = 'You got them all!';
    } else {
        WinLossMsg.textContent = '3 or 4 out of 5 aint so bad... Take your Ginko.';
    }
}