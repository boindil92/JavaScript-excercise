const button=document.querySelector("#btn");
button.onclick=()=>alert("hello world!"); //arrow function

const bestButton=document.querySelector("#bestButton");
bestButton.addEventListener("click",()=> {
    alert("Hello THere!");
})

function alertFunction() {
    alert("YAY YOU DID IT!");
}

function cool(e){
    e.target.style.background = "blue";
    
}

const callBack=document.querySelector("#callBack");
callBack.addEventListener("click",cool);