


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
   
    let player = prompt("Please choose your weapon: ","rock,paper or scissors!");
    let machine = getComputerChoice();
    console.log(player);
    console.log(machine);

    if(player==machine){
        console.log('No one wins :C try again!');
    }
    
    // const pc=getComputerChoice

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
