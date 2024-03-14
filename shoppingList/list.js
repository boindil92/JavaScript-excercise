const addButton= document.querySelector("#add");

const list= document.querySelector("#list");

const item=document.querySelector("#item");




addButton.addEventListener("click",add);

function test () {
    alert("ok!");
}


function add () {

    let itemValue=item.value;



    const newList=document.createElement("li");

    const span=document.createElement("span");
    span.textContent=itemValue;

    const newButton=document.createElement("button");
    newButton.textContent="Delete";

    newList.appendChild(span);
    newList.appendChild(newButton);
    list.appendChild(newList);

    newButton.addEventListener("click",remove)

    function remove (){
        list.removeChild(newList);
    }


    item.value="";


}







