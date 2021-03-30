//creat a way for the user to input their choice//
//console.log(playerChoice)//
//create a function that randomly calls either rock paper or scissors//

const computerSelection = computerPlay();
const playerSelection = prompt("Please choose Rock, Paper, or Scissors");
const player = (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
const youWin = ("You win! " + player + " beats " + computerSelection + "!");
const youLose = ("You lose! " + computerSelection + " beats " + player + "!");
const youTie = ("You Tie! You both played " + player + "!");




function computerPlay () {
 
    const options = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * options.length);
    return (choice, options[choice]);
}

//console.log(computerPlay())//
//create a way for the computer to tell the user what it chose//

//create a way for the computer to determine what wins in each scenario//

//create a way for the computer to tell the user who won//

//make it repeatable//
function playRound () {

        
         if (player === 'Rock' && computerSelection === 'Paper') {
         return (youLose);

         } else if (player === 'Rock' && computerSelection === 'Scissors') {
         return (youWin);
       
         } else if (player === 'Rock' && computerSelection === 'Rock') {
         return (youTie);
         
         } else if (player === 'Paper' && computerSelection === 'Rock') {
         return (youWin);

         } else if (player === 'Paper' && computerSelection === 'Paper') {
         return (youTie);

         } else if (player === 'Paper' && computerSelection === 'Scissors') {
         return (youLose);


         } else if (player === 'Scissors' && computerSelection === 'Rock') {
         return (youLose);

         } else if (player === 'Scissors' && computerSelection === 'Paper') {
         return (youWin);

         } else if (player === 'Scissors' && computerSelection === 'Scissors') {
         return (youTie);

         } else {
        return("You need to enter Rock, Paper, or Scissors in you want to play")

        }
}
       
       
       console.log (playRound(playerSelection, computerSelection));
       