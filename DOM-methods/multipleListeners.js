const buttons = document.querySelectorAll("button");


buttons.forEach(buttonListener);

function buttonListener(button) {

    button.addEventListener("click", alertId)

     function alertId() {
         alert(button.id)
}
}