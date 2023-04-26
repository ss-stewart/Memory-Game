// games starts when btn.play is clicked
onClick(btn.play)

    const frontOfCard = document.querySelector('.frontOfCard')
    frontOfCard.innerHTML = ''
    // Create an empty array for 5 items
    var fiveRanInt = []
    // Start a loop and run it 5 times
    for(i = 0; i < 5; i++) {
        const card = document.createElement(p)
        fiveRandInt[i] = Math.floor( Math.random() * 999 )
        card.textContent = 
        }
        frontOfCard.appendChild(card)
    // Use the index of the loop to assign the random number to that index of the array

        // flip card

        // start timer
        const timer = document.querySelector('#timer')
     // console.log("this is the timer" , timer)
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

onClick(btn.checkPlayerAns)
onClick(btn.playAgain) 
    // same as play button

