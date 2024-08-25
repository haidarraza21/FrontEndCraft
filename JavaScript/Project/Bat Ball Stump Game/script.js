
function generateComputerChoice(){
    let computerChoice;
    let randomNumer = Math.random() * 3;
    if(randomNumer >0 && randomNumer <=1){
        return 'Bat';
    } else if(randomNumer >1 && randomNumer <=2){
        return 'Ball';
    } else{
        return 'Stump';
    }    
}

function getResult(userMove, computerMove){
    if(userMove === 'Bat'){
        if(computerMove === 'Ball'){
           return 'User won!';
        } else if(computerMove === 'Bat'){
           return `It's a tie!`
        } else{
          return ` Computer has won!`;
        }
    } else if (userMove == 'Bat') {
        if(computerMove === 'Ball'){
            return `It's a tie!`;
        } else if (computerMove === 'Bat'){
            return `Computer has won!`;
        } else {
            return `User won!`;
        }

    } else {
        if(computerMove === 'Ball'){
            return `User won!`;
        } else if(computerMove === 'Bat'){
            return `Computer has won!`;
        } else{
            return `It's a tie!`;
        }
    }
}

function showResult(userMove, computerMove, result){
    alert(`You have choose ${userMove}. Computer choice is ${computerMove} and ${result}`)

}
