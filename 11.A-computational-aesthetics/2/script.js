function setup () {
  createCanvas(400, 400);
}
function draw () {
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();
  smooth();

  // left shape
  push(); // startin a new drawing state
  // when we move the mouse, the shape moves (-50 x so that it doesnt intertwine wiht the other)
  translate(mouseX - 50, mouseY);
  // scale
  scale(0.5 + sin(frameCount * 0.1) * 0.35);
  // drawing the shape
  myShape();
  // getting back to original state
  pop();


  // right shape
  push();
  // when we move the mouse, the shape moves (+50 x so that it doesnt intertwine with the other)
  translate(mouseX + 50, mouseY);
  scale(1 + cos(frameCount * 0.05) * 0.35);
  myShape();
  pop();
}

function myShape () {
  // draw a shape
  ellipse(20, 0, 40, 40);
  ellipse(100, 0, 40, 40);
  triangle(30, 75, 58, 20, 86, 75);
}
