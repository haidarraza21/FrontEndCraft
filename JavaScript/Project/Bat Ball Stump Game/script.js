let score ={
    win : 0,
    lost: 0,
    tie : 0,

};

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
            score.win ++ ;
           return 'User won!';
        } else if(computerMove === 'Bat'){
            score.tie ++;
           return `It's a tie!`
        } else{
            score.lost ++;
          return ` Computer has won!`;
        }
    } else if (userMove == 'Bat') {
        if(computerMove === 'Ball'){
            score.tie ++;
            return `It's a tie!`;
        } else if (computerMove === 'Bat'){
            score.lost ++;
            return `Computer has won!`;
        } else {
            score.win ++ ;
            return `User won!`;
        }

    } else {
        if(computerMove === 'Ball'){
            score.win ++ ;
            return `User won!`;
        } else if(computerMove === 'Bat'){
            score.lost ++;
            return `Computer has won!`;
        } else{
            score.tie ++;
            return `It's a tie!`;
        }
    }
}

function showResult(userMove, computerMove, result){
    //console.log(score);
    alert(`You have choose ${userMove}. Computer choice is ${computerMove} 
        
    ${result}
    
    Win:${score.win},   Lost:${score.lost},   Tie:${score.tie}`)

}
