function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(240);

  // scaling the shape as we move the mouse
  scale(mouseX / 300, mouseY / 300);

  // she shape changes as we move
  translate(width / 4, height / 4);

  fill(0, 250, 250);
  rect(20, 20, 200, 200);
}
