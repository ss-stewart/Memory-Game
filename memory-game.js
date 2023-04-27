// games starts when btn.play is clicked
init ()
function init () {

}

    const frontOfCard = document.getElementsByClassName("frontOfCard")
    const card = document.createElement('p')
    const timer = document.querySelector('#timer')
    function generateNums () {
        frontOfCard.innerHTML = ''
        // Create an empty array for 5 items
        var fiveRandInt = []
        // Start a loop and run it 5 times
        
        for(i = 0; i < 5; i++) {
            fiveRandInt[i] = Math.floor( Math.random() * 999 )
            //card.textContent = fiveRandInt
            //frontOfCard.appendChild(card)
            }
            console.log(fiveRandInt)
    }
  
    // Use the index of the loop to assign the random number to that index of the array

        // flip card

    function startTimer () {
        timer.innerHTML = ''

        let i = 10

        while (i >= 0) {
            const para = document.createElement('p')
            if (i === 10) {
                para.textContent = `Countdown ${i}`
            } else if (i<10 && i>0) {
                para.textContent = i
            } else {
                para.textContent = "Time's up!"
            }
            timer.appendChild(para)
            i--;
        }
    }
        // start timer

     // console.log("this is the timer" , timer)

onClick(btn.checkPlayerAns)
onClick(btn.playAgain) 
    // same as play button, ie. generateNums, startTimer, flip card

