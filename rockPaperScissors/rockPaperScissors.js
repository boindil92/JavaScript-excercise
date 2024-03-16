function testCC() { //To test Computer Choice
    
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

function testMR(a) {   //Multiple round function that decides how many rounds/more games
    
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

function consoleSingleRound (string) {
   
    let choice = prompt("Please choose your weapon: ","rock,paper or scissors!");
    const player= choice.toLowerCase()
    const machine = getComputerChoice();
    console.log('you choose '+player);
    console.log('computer throws '+machine);

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
    } else {
        console.log('invalid Selection, please try again!');
    }
}




// DOM elements from here, creation of UI



let player= undefined;
let pcScore=0;
let playerScore=0;

let play=document.querySelector("#play");
play.addEventListener("click",createButtons);
// upper.removeChild(scoreboard); needs to obe implemented to clear scoreboard.


function createButtons () {


    const upper=document.querySelector("#upper");
    const newDiv=document.createElement("div");

    const scoreboard=document.createElement("div");


    
    

    play.removeEventListener("click",createButtons);



    const rockButton=document.createElement("button");
    rockButton.textContent="Rock!";
    rockButton.addEventListener("click", () => {player="rock"
    scoreboard.textContent="PC score= "+pcScore+" Your score= "+playerScore;;});
    rockButton.addEventListener("click",oneRound);


    


    const paperButton=document.createElement("button");
    paperButton.textContent="Paper!";
    paperButton.addEventListener("click", () => {player="paper"
    scoreboard.textContent="PC score= "+pcScore+" Your score= "+playerScore;;});
    paperButton.addEventListener("click",oneRound);

    



    const scissorsButton=document.createElement("button");
    scissorsButton.textContent="Scissors!";
    scissorsButton.addEventListener("click", () => {player="scissors"
    scoreboard.textContent="PC score= "+pcScore+" Your score= "+playerScore;;});
    scissorsButton.addEventListener("click",oneRound);


    newDiv.appendChild(rockButton);
    newDiv.appendChild(paperButton);
    newDiv.appendChild(scissorsButton);
    newDiv.appendChild(scoreboard);

    upper.appendChild(newDiv);

}



function oneRound () {
   

    
    const machine = getComputerChoice();
    alert('you choose '+player);
    alert('computer throws '+machine);


    if (player==machine) {
        alert("No one Won :C Try again!");

    } else if (player=='rock' && machine=='paper') {
        alert('You LOSE! Paper beats Rock!');
        pcScore=(pcScore+1);

    } else if (player=='rock' && machine=='scissors') {
        alert('You WIN! Rock beats Scissors!');
        playerScore=(playerScore+1);
        
    } else if (player=='paper'&&machine=='rock') {
        alert('You WIN! Paper beats Rock!');
        playerScore=(playerScore+1);
        
    } else if (player=='paper'&&machine=='scissors') {
        alert('You LOSE! Scissors beats Paper!');
        pcScore=(pcScore+1);
        
    } else if (player=='scissors'&&machine=='rock') {
        alert('You LOSE! Rock beats Scissors!');
        pcScore=(pcScore+1);
        
    } else if (player=='scissors'&&machine=='paper') {
        alert('You WIN! Scissors beats Paper!');
        playerScore=(playerScore+1);
    } else {
        alert('invalid Selection, please try again!');
    }
    



}