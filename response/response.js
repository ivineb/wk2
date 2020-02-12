/* function setup() {
    print("I’m starting");
    }
    function draw() {
    print("I’m running");
    } */


// example here

/* var x = 280;
var y = -100;
var diameter = 380;

function setup() {
createCanvas(480, 120);
fill(102);
}
function draw() {
background(204);
ellipse(x, y, diameter, diameter);
}
 */

// another cool example


/* function setup() {
    createCanvas(480, 120);
    fill(0, 102);
    noStroke();
}
    function draw() {
  //  background(204); add this so that the one dot follows you
    ellipse(mouseX, mouseY, 9, 9);
} */

// draw continuously

/* function setup() {
    createCanvas(480, 120);
    strokeWeight(4);
    stroke(0, 102);
    }
    function draw() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    } */

// Set Thickness on the fly

 function setup() {
    createCanvas(480, 120);
    stroke(0, 102);
}

function draw() {
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

// Easing Does It

/* var x = 0;
var easing = 0.01;
function setup() {
createCanvas(220, 120);
}
function draw() {
var targetX = mouseX;
x += (targetX - x) * easing;
ellipse(x, 40, 12, 12);
print(targetX + " : " + x);
} */

// Smooth Lines with Easing


