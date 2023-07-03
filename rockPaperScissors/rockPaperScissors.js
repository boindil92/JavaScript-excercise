


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

function singleRound () {
    let player = prompt("Please choose your weapon: ","rock,paper or scissors!");
    


    console.log(player);
  
    // let pc=getComputerChoice
    
}
