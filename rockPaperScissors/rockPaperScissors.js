function testCC() { //Computer Choice
    
    for (let i=0; i<20;i++){
        let result=getComputerChoice();
        console.log(result);
    }

}

function testSR() {  //Single Round
   
    let result=singleRound();

    for (let i=0; i<5;i++){     
        console.log(result);
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
    console.log(player);
    console.log(machine);

    if(player==machine){
        console.log('No one wins :C try again!');
    }
    


    // if (player==pc){
    //     alert("No one Won :C Try again!");

    // } else if {

    // } else if {
        
    // } else if {
        
    // } else if {
        
    // } else if {
        
    // } else if {
        
    //  }
}
