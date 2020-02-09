let rotateBy = 4;
let scaleB = 0.2;
let value = 0;

function setup() {
    canvas = createCanvas(1000, 1000); // create canvas
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy * 8);
    console.log(alt);
    noFill();
    stroke('#5f6caf');
    strokeWeight(0.3);
    triangle(75, 35 + alt, 58, 20, 86, 75 / alt);
    stroke('blue');
    triangle(200, 100, 100, 200, 200, 300);
    stroke('#ea7ad7');
    circle(80 - alt, 40 * alt, 30 * alt);
    stroke('purple');
    circle(80, 40, 30 * alt);
    strokeWeight(0.3);
    stroke('orchid');
    ellipse(33, 50, 33, 33 / alt);
    stroke(value);
    strokeWeight(0.3);
    circle(500, 40, 700);
}

function draw() {
    translate(500, 500); // drawing placement
    rotate(rotateBy);
    scale(scaleB);
    makeArm(rotateBy);
    makeArm(scaleB);
    rotateBy += 4;
    scaleB += 0.01;
}

function mousePressed() { // if mouse is pressed, the loop stops
   noLoop();
}
function mouseMoved() { // if mouse moved, the color changes
    value = value + 5;
    if (value > 255) {
      value = 0;
    }
}
