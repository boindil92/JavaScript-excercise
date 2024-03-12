const container=document.querySelector("#container");

const content=document.createElement("p");
content.textContent="hi, im red!";
content.style.color="red";

const header=document.createElement("h3");
header.textContent="i'm a blue h3!";
header.style.color="blue";

const newDiv=document.createElement("div");
newDiv.classList.add("newContainer");
newDiv.style.cssText = "color: black; background: pink;";
newDiv.style.border = ("solid black");
newDiv.textContent="hello";


container.appendChild(content);
container.appendChild(header);


const newHeader=document.createElement("h1");
newHeader.textContent="hi, i'm in a div";

const newP=document.createElement("p");
newP.textContent="me too!";

newDiv.appendChild(newHeader);
newDiv.appendChild(newP);
container.appendChild(newDiv);

