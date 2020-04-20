function setup () {
  createCanvas(400, 400);
}
function draw () {
  background(240);
  fill('orange');
  noStroke();

  // first shape
  push();
  // move the origin to the center
  translate(150, 150);

  // then rotate the grid around the center
  // then scale
  rotate(radians(frameCount));
  scale(0.5 + sin(frameCount * 0.1) * 0.25);
  myShape();
  pop();

  // second shape
  push();
  translate(250, 250);
  rotate(radians(frameCount));
  scale(0.2 + sin(frameCount * 0.1) * 0.35);
  fill('orangered');
  noStroke();
  myShape();
  pop();
}
function myShape () {
  // draw a shape
  rect(0, 0, 200, 200);
  rect(50, 50, 100, 100);
}
