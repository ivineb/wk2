/* let heading;
let button;
let input;

function sayMessage() {
    console.log('nothing yet');
    alert(input.value());
    input.value(''); // resets it back to an empty value
}

function setup () {
    createCanvas(800, 600);
    background('lightblue');
    heading = createElement('h2', ['Howdy']);
    heading.position(100, 200);

    button = createButton('alert message')
    button.size(120, 20);
    button.position(100, 275);
    button.mousePressed(sayMessage);

    input = createInput('');
    input.position(100, 250);
}
 */
///////////////////////////


/* let heading;
let button;
let input;
let message = 'type something to change me';

function sayMessage() {
    message = input.value();
    input.value('');
}

function setup () {
    createCanvas(800, 600);
    background('lightblue');
    heading = createElement('h2', ['Howdy']);
    heading.position(100, 200);

    button = createButton('alert message')
    button.size(120, 20);
    button.position(100, 275);
    button.mousePressed(sayMessage);

    input = createInput('');
    input.position(100, 250);
}

function draw () {
    background('lightblue');
    textSize(28);
    fill('purple');
    text(message, 100, 400);
} */

let rotateBy = 5;

function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 / alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}

function mousePressed() {
    noLoop();
}