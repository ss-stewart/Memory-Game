# Menory-Game

Wireframe
![MG Wireframe 1](https://media.git.generalassemb.ly/user/48637/files/f4f61683-bdc6-4616-8f45-5cabd9550cf9)

Numbers Memory Game
  The game allows players to test and build their memory retention, while having fun. The game presents users with a set of five random numbers that they must remember in their order before a displayed timer runs out. At the end of the timer, the cards flips so that the numbers are no longer visible. The user is then prompted to enter the numbers as they recall them and then check to see how accurate they were. The game will then display a message, letting the player know how well they did, along with the option to play again.

User Stories
1. I want to see a visually appealing game that tells me what the game is
2. I want to be be able to start the game, with a click
3. I want to see clear instructions or prompts on how to play
4. I want to see non-repetetive numbers to memorize
5. I want those numbers to become hidden upon some trigger
6. I want to be promted and allowed to enter the numbers I remember
7. I want to be able to see how well I did
8. I want the option to play again

Technologies Used
1. CSS
2. JS
3. HTML
4. Emoji Library ?

Pseudocode
1. Store media sources: background (wikimedia commons), emoji for win/lose responses (open source, emoji library)
2. Display game name in header, general 'how the game is played' in subheading, background media and 'play' button
3. using randomInt, generate 5 integers from 99-999
  . Display each random number on 1 of 5 cards
  . Also display countown clock/timer 
  . Display game instructions, 'you have <x> seconds to remember these number in the correct order'
4. At end of countdown, display message 'Time's up!' and flip cards to white
  . Display instructions/prompt, 'Think tou got it? Enter the numbers in the correct order' with thinking-emoji
  . Display button with title, 'Click to see how you did!' 
5. If player gets 4 or 5 correct, display message 'Way to go, Eintein! <nerd-emoji>'
  . if 3, display message, 'I bet you leave your keys in the fridge... <smirk-emoji>'
  . if less, display message, 'Better take that ginko! <no-face-emoji>'
6. Display button 'Want to play again?'
  . Click resets and restarts game

Variables
  card: front and back
  timer: endOfTimer, setInterval, startTime, seconds

Buttons
  Play!, Did you get them right? Play Again
  Hover with cursor pointer

Card
  Divs that display the random integers
  flip to back side at end of timer

Functions
  onClick() - start game, submit player results for validation
  render - game generated numbers and event messages
  math.Random() - select numbers for player
  if/else - validate player response, end of timer
  document.getelementbyid() 
  init - resets and restarts game upon click event
  '===' to validates player responses

Timer: Display in an element

Messages to render
  Game instructions after play button is clicked
  'Better take that ginko! <no-face-emoji>'
  'Time's up!' and flip card
  'Display instructions/prompt, 'Think tou got it? Enter the numbers in the correct order' with thinking-emoji
  'I bet you leave your keys in the fridge... <smirk-emoji>'
  'Way to go, Eintein! <nerd-emoji>'

Icebox
  . Add more levels: more numbers to remember and less time on the countdown clock
  . Better visual, eg. animated background
  . Ability to play against others
  . Option to get clues
  . Ability to keep track of wins overtime
  . Ability to share success on social media
