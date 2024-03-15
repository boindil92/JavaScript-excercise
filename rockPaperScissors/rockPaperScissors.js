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

function singleRound (string) {
   
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

let play=document.querySelector("#play");
play.addEventListener("click",createButtons);

function createButtons () {
    const upper=document.querySelector("#upper");
    const newDiv=document.createElement("div");

    const rockButton=document.createElement("button");
    rockButton.textContent="Rock!";
    const paperButton=document.createElement("button");
    paperButton.textContent="Paper!";
    const scissorsButton=document.createElement("button");
    scissorsButton.textContent="Scissors!";

    newDiv.appendChild(rockButton);
    newDiv.appendChild(paperButton);
    newDiv.appendChild(scissorsButton);

    upper.appendChild(newDiv);

}


const rock= document.querySelector("#rock");
const paper= document.querySelector("#paper");
const scissosrs=document.querySelector("scissors");

rock.addEventListener("click",rockRound);
paper.addEventListener("click",);
scissosrs-addEventListener("click",);

function rockRound () {
   
    
    const player= "rock"
    const machine = getComputerChoice();
    alert('you choose '+player);
    alert('computer throws '+machine);

    if (player==machine) {
        alert("No one Won :C Try again!");

    } else if (player=='rock' && machine=='paper') {
        alert('You LOSE! Paper beats Rock!');

    } else if (player=='rock' && machine=='scissors') {
        alert('You WIN! Rock beats Scissors!');
        
    } else if (player=='paper'&&machine=='rock') {
        alert('You WIN! Paper beats Rock!');
        
    } else if (player=='paper'&&machine=='scissors') {
        alert('You LOSE! Scissors beats Paper!');
        
    } else if (player=='scissors'&&machine=='rock') {
        alert('You LOSE! Rock beats Scissors!');
        
    } else if (player=='scissors'&&machine=='paper') {
        alert('You WIN! Scissors beats Paper!');
    } else {
        alert('invalid Selection, please try again!');
    }
}