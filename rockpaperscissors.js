//create input for user choice - Done!//
//assign player choice to variable - Done!//
//create random choice generator for computer - Done!//
//assign computer choice to variable - Done!//
//create function to determine winner or loser - Done!//
//create loop for best of 5 - Almost there//
//create way of tracking how many wins each side has - Done!//
//assign wins to variable - Done!//
//create statement for overall winner or loser - Done!//
//watch your scopes!!!!! - I did!!!!!//
console.log('Ready to play me in a best of 5 rock, paper, scissors match?')
playerWin = 0;
computerWin = 0;
  
    function computerPlay() {
            const options = ['rock', 'paper', 'scissors'];

            const choice = Math.floor(Math.random() * options.length);
                return (choice, options[choice]);;
    }

    function game(playerSelection, computerSelection) {
            
            while ((playerWin + computerWin < 5) && (playerWin <= 2) && (computerWin <= 2)) {
                round(playerSelection, computerSelection)
            }
                return (complete());

        function round(playerSelection, computerSelection) {
            playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
            computerSelection = computerPlay();
            
            if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock')||(playerSelection === 'scissors' && computerSelection === 'paper')) {
                playerWin++;
                console.log('You played ' + playerSelection + ' and the computer played ' + computerSelection + '. You Won! The score is ' + playerWin + ' to ' + computerWin + '.');
            } else if ((playerSelection === 'rock' && computerSelection === 'paper')|| (playerSelection === 'paper' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'rock')){
                computerWin++;
                console.log('You played ' + playerSelection + ','+ ' but the computer played ' + computerSelection + '. You lost! The score is ' + playerWin + ' to ' + computerWin + '.');
            } else if (playerSelection === computerSelection) {
                console.log('Computer played ' + computerSelection + '. You tied! The score is ' + playerWin + ' to ' + computerWin + '.');
            } else 
                console.log("Please in put a valid choice")
            
        }
    }

    function complete() {
           if (playerWin > computerWin) {
           return ('You did it! You won the game! Refresh the browser to play again.')
       } else if (computerWin > playerWin){
           return ('Too bad! You lost the Game! Refresh the browser to play again.')
       } else 
          return ('You tied? How is that even possible?')
    }

let computerSelection = computerPlay(); 
let playerSelection;

    console.log(game(playerSelection, computerSelection));