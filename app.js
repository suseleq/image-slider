// Selections
const images = [
    'colorFlipper',
    'Counter',
    'PassTheMessage',
    'Quotes',
    'Todo'
];
var index = 0;
const image = document.querySelector('.img');
const buttonRight = document.querySelector('.btn-right');
const buttonLeft = document.querySelector('.btn-left');
// Listener events
buttonRight.addEventListener('click', right);
buttonLeft.addEventListener('click', left);
// Function
function right() {
    if (index == images.length - 1){
        index = 0;
    }else{
        index += 1;
    }
    image.setAttribute('src', `./img/${images[index]}.JPG`);
}

function left() {
    if (index == 0){
        index = images.length - 1;
    }else{
        index -= 1;
    }
    image.setAttribute('src', `./img/${images[index]}.JPG`);
}