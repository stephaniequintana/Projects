const circles = document.getElementsByClassName('circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progressBar = document.getElementById('progress');

let counter = 0;

function more() {
    if(counter <= circles.length -1){
        counter++
    }
   
    switch(+counter){
        case 1: 
            progressBar.style.width = "28%";
            break;
        case 2: 
            progressBar.style.width = "53%";
            break;
        case 3: 
            progressBar.style.width = "80%";
            break;
    }

    circles[counter].classList.add('active');

    if(counter == 3){
        next.setAttribute('disabled', "");
    }

    if(counter > 0){
        prev.removeAttribute('disabled', "");
    }
}
function less() {
    if(counter > 0){
        counter--;
    }

    switch(+counter){
        case 2: 
            progressBar.style.width = "53%";
            break;
        case 1: 
            progressBar.style.width = "28%";
            break;
        case 0: 
            progressBar.style.width = "0%";
            break;
    }

    circles[counter +1].classList.remove('active');
    
    if(counter === 0){
        prev.setAttribute('disabled', "");
     }
    
    if(counter === 2){
        next.removeAttribute('disabled', "");
     }
}

next.addEventListener('click', more);
prev.addEventListener('click', less);