// CACHED VARIABLES

const frontOfCard = document.getElementsByClassName("frontOfCard");
const card = document.createElement('p');
const timer = document.querySelector('#timer');
const instructionMsg = document.getElementById("msg");
const startButton = document.getElementById('startGameBtn');
const restartButton = document.getElementById('playAgainBtn');
const checkAnsbutton = document.getElementById('checkPlayAnsBtn');

// EVENT LISTENERS
startButton.addEventListener('click', handleClick);
restartButton.addEventListener('click', handleClick);
checkAnsbutton.addEventListener('click', handleClick);

// how to change instruction msg (if ... write the following code)
// instructionMessage.innerHTML = "new message"

// Game starts when player hits play button
    // display instructions for player as a message
init ();
function init () {
    instructionMsg.style.display = "none";
}
    // get 5 random numbers
    function generateNums () {
        instructionMsg.style.display = "block";
        frontOfCard.innerHTML = '';
        // Create an empty array for 5 items
        var fiveRandInt = [];
        // Start a loop and run it 5 times        
        for(i = 0; i < 5; i++) {
            fiveRandInt[i] = Math.floor( Math.random() * 999 );
            }
            print(fiveRandInt);
    }

    // flip card[Div] to display fiveRandInt

        function handleClick() {
    // Start the timer; when timer ends, alert player
            let seconds = 10;
            let intervalId = setInterval(function() {
                timer.innerHTML = `Timer: ${seconds}s`;
                seconds--;
              if (seconds < 0) {
                clearInterval(intervalId);
                timer.innerHTML = 'Time is up!';
              }
            }, 1000);
            
            generateNums();
          }    
        // flip to back of card - blank  

// display instructions (enter the numbers) for player as a message
    // "Enter the numbers you remember in the order that you saw them xx, xx, xx, xx, xx"
// accept user input
function acceptPlayerInput() {
    const PlayerInput = document.querySelector('playerAnswer');
    const answer = playerInput.numbers;
  }

// Allow player to check their answer using a button
onClick(btn.checkPlayerAns)

    // Validating player answers. Move to appropriate location once you've got code right

    compare = (x, y) => playerInput.filter(i => gameNumbers.includes(i)).length;
        return(compare(playerInput, gameNumbers));
    // display conditional message to tell player how they did
    if (compare(playerInput, gameNumbers) < 3) {
        print("I bet you leave your keys in the fridge... " + smirking_emoji);
    } else if (compare(playerInput, gameNumbers) > 4) {
        print("You got them all! " + nerd_emoji);
    } else
        print("3 or 4 out of 5 aint so bad... Take your Ginko. " + no_face_emoji);

// Allow player to re-start game
onClick(btn.playAgain) 
  // does the same at the Start button