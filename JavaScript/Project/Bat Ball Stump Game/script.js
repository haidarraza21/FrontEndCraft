
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