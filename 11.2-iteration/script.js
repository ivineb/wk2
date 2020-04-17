var cwidth = 640
var cheight = 400
var row = 20;

function setup () {
  createCanvas(cwidth, cheight);
}

function draw () {
  background(255);
  for (var i = 0; i < width; i += 10) {
    if (i % 4 === 0) {
      stroke('orangered');
      line(i, 0, i, height);
    } else {
      stroke('orange');
      line(i, 0, i, height);
    }
  }
  for (var x = 50; x <= width - 50; x += 50) {
    for (var y = 50; y <= height - 50; y += 50) {
      stroke('blue');
      // stroke(y / width * 255);
      strokeWeight(3);
      line(x - 10, y - 10, x + 10, y + 10);
      line(x + 10, y - 10, x - 10, y + 10);
      stroke('fuchsia');
      line(x + 10, y - 10, x - 10 * row, y + 10);
      stroke('green');
      line(x + 10, y - 10, x - 10 * row / 7, y + 10 * row);
      noStroke();
      fill(y / width * 255);
      ellipse(x + 20, y + 20, 9, 9);
    }
  }
}
