function testCC() { //Computer Choice
    
    for (let i=0; i<20;i++){
        let result=getComputerChoice();
        console.log(result);
    }

}

function testSR() {  //Single Round incomplete funcion results
   
    let result=singleRound();

    for (let i=0; i<5;i++){     
        console.log(result);
    }

}

function testMR(a) {   //Multiple round function to decide how many rounds more games
    
    for (let i=0;i<a;i++){     
       singleRound();
    }

}

function getComputerChoice () {
    
    let pc= Math.floor(Math.random() * 3);

    if (pc==0) {
        return pc='rock';
    } else if (pc==1) {
        return pc='paper';
    } else {
        return pc='scissors'
    }
}




function singleRound (string) {
   
    const player = prompt("Please choose your weapon: ","rock,paper or scissors!");
    const machine = getComputerChoice();
    console.log('you choose '+player);
    console.log('computer throws '+machine);

    // if(player !='rock','paper','scissors'){
    //     console.log('invalid Selection, please try again!');
    // }
    
    if (player==machine) {
        console.log("No one Won :C Try again!");

    } else if (player=='rock' && machine=='paper') {
         console.log('You LOSE! Paper beats Rock!');

    } else if (player=='rock' && machine=='scissors') {
        console.log('You WIN! Rock beats Scissors!');
        
    } else if (player=='paper'&&machine=='rock') {
         console.log('You WIN! Paper beats Rock!');
        
    } else if (player=='paper'&&machine=='scissors') {
         console.log('You LOSE! Scissors beats Paper!');
        
    } else if (player=='scissors'&&machine=='rock') {
         console.log('You LOSE! Rock beats Scissors!');
        
    } else if (player=='scissors'&&machine=='paper') {
         console.log('You WIN! Scissors beats Paper!');
    }
}