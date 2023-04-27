// CACHED VARIABLES
const test = document.getElementById('test');
const cardFront = document.getElementsByClassName('cardFront');
const timer = document.querySelector('#timer');
const instructionMsg = document.getElementById("msg");
const startButton = document.getElementById('startGameBtn');
const restartButton = document.getElementById('playAgainBtn');
const checkAnsButton = document.getElementById('checkPlayAnsBtn');
const playerInput = '';
const gameNumbers = '';

// EVENT LISTENERS
startButton.addEventListener('click', init);
restartButton.addEventListener('click', init);
// let compare = (x, y) => playerInput.filter(i => gameNumbers.includes(i)).length;
checkAnsButton.addEventListener('click', function() {compare(playerInput,gameNumbers)});
// cardFront.addEventListener('click', generateNums)

// how to change instruction msg (if ... write the following code)
// instructionMessage.innerHTML = "new message"

// Game starts when player hits play button
    // display instructions for player as a message
// init (); ..................................................... REMOVE?
function init () {
    instructionMsg.style.display = "none";
    generateNums(); 
    startTimer();
    // ADD FXN FOR CARD FLIP
}
    // get 5 random numbers
    function generateNums () {
        console.log('functionRan')
        instructionMsg.style.display = "block";
        // cardFront.innerHTML = fiveRandInt;
        // Create an empty array for 5 items
        var fiveRandInt = [];
        // Start a loop and run it 5 times        
        for(i = 0; i < 5; i++) {
            fiveRandInt[i] = Math.floor( Math.random() * 999 );
        }
        // SUP W/ THIS
        test.textContent = fiveRandInt;
        console.log(fiveRandInt);
        console.log(cardFront);
    }
    // flip card[Div] to display fiveRandInt
    document.querySelector("cardFront").classList.toggle("flip")

    // Start the timer; when timer ends, alert player
    function startTimer() {
        let seconds = 10;
        let intervalId = setInterval(function() {
            timer.innerHTML = `Timer: ${seconds}s`;
            seconds--;
        if (seconds < 0) {
            clearInterval(intervalId);
            timer.innerHTML = 'Time is up!';
            test.textContent = '';
        }
        }, 1000);
    }    
     
    // flip to back of card - blank  
// console.log(timer)
// display instructions (enter the numbers) for player as a message
    // "Enter the numbers you remember in the order that you saw them xx, xx, xx, xx, xx"
// accept user input
function acceptPlayerInput() {
    const PlayerInput = document.querySelector('playerAnswer');
    const answer = playerInput.numbers;

// Allow player to check their answer using a button

    // Validating player answers. Move to appropriate location once you've got code right
    let compare = (x, y) => playerInput.filter(i => gameNumbers.includes(i)).length;
    // return(compare(playerInput, gameNumbers)); ....................................
    // display conditional message to tell player how they did
    if (compare(playerInput, gameNumbers) < 3) {
        print("I bet you leave your keys in the fridge... " + smirking_emoji);
    } else if (compare(playerInput, gameNumbers) > 4) {
        print("You got them all! " + nerd_emoji);
    } else
        print("3 or 4 out of 5 aint so bad... Take your Ginko. " + no_face_emoji);
}

// Allow player to re-start game
onClick(btn.playAgain) 
  // does the same at the Start button