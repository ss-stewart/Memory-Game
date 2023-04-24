# Menory-Game

Wireframe
![MG Wireframe 1](https://media.git.generalassemb.ly/user/48637/files/f4f61683-bdc6-4616-8f45-5cabd9550cf9)

Technologies Used
1. CSS
2. JS
3. HTML
4. Emoji Library
5. Wikimedia Commons
6. CSS library (potentially)

pseudocode
1. Store media sources: background (wikimedia commons), emoji for win/lose responses (open source, emoji library)
2. Display game name in header, general 'how the game is played' in subheading, background media and 'play' button
3. using randomInt, generate 5 integers from 99-999
  . Display each random number on 1 of 5 cards
  . Also display countown clock/timer
  . Display game instructions, 'you have <x> seconds to remember these number in the correct order'
4. At end of countdown, cards flip to black
  . Display instructions/prompt, 'Think tou got it? Enter the numbers in the correct order' with thinking-emoji
  . Display button with title, 'Click to see how you did!' 
5. If player gets 4 or 5 correct, display message 'Way to go, Eintein! <nerd emoji>'
  . if 3, display message, 'I bet you leave your keys in the fridge... <smirk-emoji>'
  . if less, display message, 'Better take that ginko! <no-face-emoji>'
6. Display button 'Want to play again?'
  . Click resets and restarts game
  
Icebox
  . Add more levels: more numbers to remember and less time on the countdown clock
  . Better graphics
  . Ability to play against others
  . Option to get clues
  . Ability to keep track of wins overtime
