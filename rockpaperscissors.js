//creat a way for the user to input their choice - Done!//
//create a function that randomly calls either rock paper or scissors - Done!//
//create a way for the computer to tell the user what it chose - Done!//
//create a way for the computer to determine what wins in each scenario - Done!//
//create a way for the computer to tell the user who won - Done!//
//make it add up to 5 and declare a winner//


//debugging issues//
//incrementing up by 2 instead of 1//
//computer only chooses once//
//person only chooses once//
//loop always ends in draw regardless of plays//

const computerSelection = computerPlay();
const playerSelection = prompt("Please choose Rock, Paper, or Scissors");
const player = (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
const youWin = ('You win! ' + player + ' beats ' + computerSelection + '!');
const youLose = ('You lose! ' + computerSelection + ' beats ' + player + '!');
const youTie = ('You Tie! You both played ' + player + '!');
let a = 0;
let b = 0;
let i = 0;


function computerPlay () {
 
    const options = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * options.length);
    return (choice, options[choice]);
}


    function playRound() {
        computerPlay();

         if (player === 'Rock' && computerSelection === 'Paper') {
             b++;
         return (youLose);

         } else if (player === 'Rock' && computerSelection === 'Scissors') {
             a++;
         return (youWin);
       
         } else if (player === 'Rock' && computerSelection === 'Rock') {
         return (youTie);
         
         } else if (player === 'Paper' && computerSelection === 'Rock') {
             a++;
         return (youWin);

         } else if (player === 'Paper' && computerSelection === 'Paper') {
         return (youTie);

         } else if (player === 'Paper' && computerSelection === 'Scissors') {
             b++;
         return (youLose);


         } else if (player === 'Scissors' && computerSelection === 'Rock') {
             b++;
         return (youLose);

         } else if (player === 'Scissors' && computerSelection === 'Paper') {
             a++;
         return (youWin);

         } else if (player === 'Scissors' && computerSelection === 'Scissors') {
         return (youTie);

         } else {
        return("You need to enter Rock, Paper, or Scissors in you want to play");

         }
     }

function Game() {
    
while( i < 6 ) {
    computerPlay()
    playRound();
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(playRound());
      i++;
}
  if (b === 5) {
      return (' ' + youLose + ' ' + youLose2);

  } else if (a === 5) {
      return (' ' + youWin + ' ' + youWin2);
  } else {
      return ('Draw!');
  }


}    

const youWin2 = ('You Won 5 rounds to ' + b + '! That means you won the game!');
const youLose2 = ('You lost 5 rounds to ' + a +'. That means you lost the game.'); 
 console.log (Game());
       