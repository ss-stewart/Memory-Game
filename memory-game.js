// CACHED VARIABLES
const test = document.getElementById('test');
const cardFront = document.getElementsByClassName('cardFront');
const timer = document.querySelector('#timer');
const instructionMsg = document.getElementById("msg");
const startButton = document.getElementById('startGameBtn');
const restartButton = document.getElementById('playAgainBtn');
const checkAnsButton = document.getElementById('checkPlayAnsBtn');
const gameNumbers = '';
const playerInput = document.querySelector('#playerAnswer').value;

// EVENT LISTENERS
startButton.addEventListener('click', init);
restartButton.addEventListener('click', init);
// let compare = (x, y) => playerInput.filter(i => gameNumbers.includes(i)).length;
checkAnsButton.addEventListener('click', compareNums);
// cardFront.addEventListener('click', generateNums)

// how to change instruction msg (if ... write the following code)
// instructionMessage.innerHTML = "new message"

// Game starts when player hits play button
    // display instructions for player as a message
// init (); 
function init () {
    instructionMsg.style.display = "none";
    generateNums(); 
    startTimer();
    // flip card[Div] to display fiveRandInt
    // document.querySelector("cardFront").classList.toggle("flip"); ///////////////////// reuse
}
// get 5 random numbers
function generateNums () {
    console.log('functionRan')
    instructionMsg.style.display = "block";
    // cardFront.innerHTML = fiveRandInt;
    // Create an empty array for 5 items
    var fiveRandInt = [];
    // Start a loop and run it 5 times        
    for(i = 0; i < 3; i++) {
        fiveRandInt[i] = Math.floor( Math.random() * 999 );
    }
    test.textContent = "Remember these numbers in the order they appear" + fiveRandInt;
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
            test.textContent = '';
        }
    }, 1000);
}    
     
    // flip to back of card - blank  
// console.log(timer)
// display instructions (enter the numbers) for player as a message
    // "Enter the numbers you remember in the order that you saw them xx, xx, xx, xx, xx"
// accept user input

// Allow player to check their answer using a button

    // Validating player answers. Move to appropriate location once you've got code right
    // let compare = (x, y) => playerInput(i => gameNumbers.includes(i)).length;
    // return(compare(playerInput, gameNumbers)); ....................................
    // display conditional message to tell player how they did
    
    
    //////////////////
function compareNums() {
    let playerInputArr = [playerInput.value];
    compare = (x, y) => playerInputArr.reduce((x, z) => x + gameNumbers.includes(z), 0);
    console.log(compare(playerInputArr, gameNumbers));
    if (compare(playerInputArr, gameNumbers) < 3) {
        console.log("I bet you leave your keys in the fridge...");
    } else if (compare(playerInputArr, gameNumbers) > 4) {
        console.log("You got them all! ");
    } else {
        console.log("3 or 4 out of 5 aint so bad... Take your Ginko.");
    }
}
    /////////////////////
    // function compareArrays(playerInput, gameNumbers) {
    //     for (let i = 0; i < playerInput.length; i++) {
    //       if (playerInput[i] !== gameNumbers[i]) {
    //         console.log("I bet you leave your keys in the fridge")
    //         // return false; // arrays don't match
    //       } else {
    //         console.log("You got them all!")
    //         // return true; // arrays match
    //       }
    //     } 
    // }
    //////////////////////////////////////////////////

    // if (compare(playerInput, gameNumbers) < 3) {
    //     print("I bet you leave your keys in the fridge... " + smirking_emoji);
    // } else if (compare(playerInput, gameNumbers) > 4) {
    //     print("You got them all! " + nerd_emoji);
    // } else
    //     print("3 or 4 out of 5 aint so bad... Take your Ginko. " + no_face_emoji);