// longer version here

/* function setup() {
    createCanvas(480, 120);
    strokeWeight(8);
    }
    function draw() {
    background(204);
    line(20, 40, 80, 80);
    line(80, 40, 140, 80);
    line(140, 40, 200, 80);
    line(200, 40, 260, 80);
    line(260, 40, 320, 80);
    line(320, 40, 380, 80);
    line(380, 40, 440, 80);
    }
 */

// the shorter version

/*  function setup() {
    createCanvas(480, 120);
    strokeWeight(8);
    }

    function draw() {
        background(204);
        for (var i = 20; i < 400; i += 60) {
            line(i, 40, i + 60, 80);
  }
} */

// another example where the i (x) is diferent (i+=8)

/* function setup() {
    createCanvas(480, 120);
    strokeWeight(2);
    }

function draw() {
    background(204);
    for (var i = 20; i < 400; i += 8) {
    line(i, 40, i + 60, 80);
    }
    } */

// cool example

 function setup() {
    createCanvas(480, 120);
    noStroke();
    }
    function draw() {
    background(0);
    for (var y = 0; y <= height; y += 30) {
    for (var x = 0; x <= width; x += 30) {
    fill(255, 140);
    ellipse(x, y, 30, 30);
    }
    }
    }
 
// another cool thing

/* function setup() {
    createCanvas(480, 120);
    fill(255);
    stroke(102);
    }
function draw() {
   background(0);
     for (var y = 20; y <= height-20; y += 10) {
     for (var x = 20; x <= width-20; x += 10) {
   ellipse(x, y, 4, 4);
// Draw a line to the center of the display
   line(x, y, 240, 60);
}
}
} */