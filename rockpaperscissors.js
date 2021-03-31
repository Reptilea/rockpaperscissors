//create input for user choice//
//assign player choice to variable//
//create random choice generator for computer//
//assign computer choice to variable//
//create function to determine winner or loser//
//create loop for best of 5//
//create way of tracking how many wins each side has//
//assign wins to variable//
//create statement for overall winner or loser//
//watch your scopes!!!!!//

playerWin = 0;
computerWin = 0;
  
    function computerPlay() {
            const options = ['rock', 'paper', 'scissors'];

            const choice = Math.floor(Math.random() * options.length);
                return (choice, options[choice]);;
    }

    function game(playerSelection, computerSelection) {
            
            while (playerWin + computerWin < 5) {
                round(playerSelection, computerSelection)
            }
                return (complete());

        


        function round(playerSelection, computerSelection) {
            playerSelection = prompt('What are you going to choose next?').toLowerCase();
            computerSelection = computerPlay();
            
            if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock')||(playerSelection === 'scissors' && computerSelection === 'paper')) {
                playerWin++;
                console.log('You played ' + playerSelection + ' and the computer played ' + computerSelection + '. You Won! The score is ' + playerWin + ' to ' + computerWin + '.');
            } else if ((playerSelection === 'rock' && computerSelection === 'paper')|| (playerSelection === 'paper' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'rock')){
                computerWin++;
                console.log('You played ' + playerSelection + ','+ ' but the computer played ' + computerSelection + '. You lost! The score is ' + playerWin + ' to ' + computerWin + '.');
            } else {
                console.log('Computer played ' + computerSelection + '. You tied! The score is ' + playerWin + ' to ' + computerWin + '.');
            }
        }

        

           
    }

    function complete() {
           if (playerWin > computerWin || playerWin >= 3) {
           return ('You did it! You won the game! Refresh the browser to play again.')
       } else if (computerWin > playerWin || computerWin >= 3){
           return ('Too bad! You lost the Game! Refresh the browser to play again.')
       } else 
          return ('You tied? How is that even possible?')
    }
let computerSelection = computerPlay(); 
const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase();
    console.log(game(playerSelection, computerSelection));