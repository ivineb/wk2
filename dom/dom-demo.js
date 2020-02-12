// we can modify elements here

let p5ListItem = document.querySelector('#p5');
p5ListItem.style.fontSize = '30px';

// we can also create new elements!

let newThing = document.createElement('span');
newThing.innerHTML = ' I am going now';
// now we have pass that new thing to an element
p5ListItem.appendChild(newThing);

// how to attach event listeners
let buttonThing = document.querySelector('.myButton');
buttonThing.addEventListener('click', () => {
    console.log('the button has been clicked');
})