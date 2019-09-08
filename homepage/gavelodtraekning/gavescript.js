let paragraph = document.getElementById("text-area");
let startButton = document.getElementById("startbutton");

let clicks = 0;

//click on button -> replace text
startButton.addEventListener('click', function() {
    paragraph.innerText = "Du har trykket start!";
    if (clicks % 2 === 0) {
        paragraph.style.display = 'none';
    }
    else {
        paragraph.style.display = 'block';  
    }
    clicks ++;
});