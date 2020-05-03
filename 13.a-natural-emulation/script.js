// volcano!
var volcanos = [];
var amountOfCol = 6;
var slider;

function setup () {
  createCanvas(500, 500);
  // slider to control the eruption
  slider = createSlider(0.01, 0.07, 0.01, 0.03)

  // setting up a loop for the mountains with random width and height everytime
  for (var i = 0; i < amountOfCol; i++) {
    volcanos[i] = new Volcano(random(width), height, random(80, 200), random(20, 80), random(80, 100), 50);
  }
}

function draw () {
  background(50);

  for (var i = 0; i < volcanos.length; i++) {
    volcanos[i].draw();
  }
}

function Volcano (x, y, tempWidth, tempTopWidth, tempHeight, amount) {
  this.particles = [];

  this.x = x;
  this.y = y;

  this.width = tempWidth;
  this.topWidth = tempTopWidth;

  this.height = tempHeight;

  this.amountOfParticles = amount;

  this.draw = function () {
    // drawing the mountains which all have a temp width and height
    fill(81, 52, 56);
    quad(this.x - this.width / 2,
      this.y, this.x - this.topWidth / 2,
      this.y - this.height, this.x + this.topWidth / 2,
      this.y - this.height,
      this.x + this.width / 2,
      this.y);
    // firing the particles
    this.fire();
  }

  // creating the fire function
  this.fire = function () {
    for (var i = 0; i < this.amountOfParticles; i++) {
      if (this.isParticleActive(this.particles[i])) {
        this.particles[i].move();
        this.particles[i].draw();
      } else {
        this.particles[i] = new Particle(this.x + random(-this.topWidth / 2, this.topWidth / 2),
          this.y - this.height,
          color(255, random(50, 180), 0, 200),
          random(4, 10),
          random(-3, 3),
          random(-2, -5));
      }
    }
  }

  this.isParticleActive = function (part) {
    if (part != null) {
      if (part.isVisible()) {
        return true;
      }
    }

    return false;
  }
}
// function for every particle with a temp random color, speed and placement
function Particle (x, y, tempColor, tempWidth, xSpeed, ySpeed) {
  this.x = x;
  this.y = y;

  this.color = tempColor;

  this.width = tempWidth;

  this.xSpd = xSpeed;
  this.ySpd = ySpeed;

  this.lifeSpan = 200;

  // move function
  this.move = function () {
    this.x += this.xSpd;
    this.y += this.ySpd;

    // this.ySpd += 0.01;
    this.lifeSpan--;

    // speed according to slide value
    this.ySpd = this.ySpd + slider.value();
  }

  // drawing each ellipse
  this.draw = function () {
    fill(this.color)
    ellipse(this.x, this.y, this.width);
  }

  this.isVisible = function () {
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      return false;
    }
    return true;
  }
}
