const addButton= document.querySelector("#add");

const list= document.querySelector("#list");

const item=document.querySelector("#item");


addButton.addEventListener("click",adding);

function test () {
    alert("ok!");
}


function adding () {

    let itemValue=item.value;
    alert(itemValue);


}
