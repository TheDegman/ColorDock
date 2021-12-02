// const button = document.querySelector('button');

// button.addEventListener('click', event => {
//     navigator.clipboard.writeText(button.innerHTML);
//     alert('Text copied to clipboard');
// });

buttons = document.querySelectorAll(".boje");
number = buttons.length;

for(let i=0; i < number; i++){
    buttons[i].addEventListener("click", function(){
        navigator.clipboard.writeText(buttons[i].innerText);
        alert("Color " + buttons[i].innerText + " has been added to clipboard!");
    });
}
