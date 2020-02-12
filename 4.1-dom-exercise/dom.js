// select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// adding an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'All about Llamas!';
heading.style.cursor = 'pointer';

// attach click event listeners
heading.addEventListener('click', handleHeadingClick);

// attach to dom
myEmptyDiv.appendChild(heading);

function handleHeadingClick () {
    document.body.style.backgroundColor = 'cyan';
}
