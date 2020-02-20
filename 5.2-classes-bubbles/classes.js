let bubbles = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 80; i++) { // making it loop 80 times!
    let x = random(width); // random x everytime
    let y = random(height); // random y everytime
    let r = random(10, 40); // and a random diameter between 10 and 40
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) { // bubbles.length(of the array)
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble { // always use 'this.' inside of a class
  constructor (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move () {
    this.x = this.x + random(-7, 7);
    this.y = this.y + random(-7, 7);
  }

  show () {
    fill('#deddfa');
    stroke('#40e0d0');
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2);
  }
}
