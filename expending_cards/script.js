const container = document.getElementById('container');
const cards = document.getElementsByClassName('card');

function update(){
    for(let card of cards){
        card.classList.remove('active');    
    }
    event.target.classList.add('active');
    console.log(event.target)
}

container.addEventListener('click', update);
