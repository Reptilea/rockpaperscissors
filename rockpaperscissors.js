//creat a way for the user to input their choice//

//create a function that randomly calls either rock paper or scissors//
function computerPlay () {
 
    const options = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * options.length);
    return (choice, options[choice]);
}

console.log(computerPlay())
//create a way for the computer to tell the user what it chose//

//create a way for the computer to determine what wins in each scenario//

//create a way for the computer to tell the user who won//

//make it repeatable//