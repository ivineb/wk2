var slider;
var slider2;
var pos;
let hue = 0;

function setup () {
  createCanvas(500, 500)
  angleMode(DEGREES)
  colorMode(HSB);

  // creating the sliders and adjusting their position
  slider = createSlider(0, 5, 0)
  slider2 = createSlider(0, 5, 0)
  slider.position(570, 570);
  slider2.position(570, 605);

  // creating a position and an icrease of 3
  pos = 0.0
  inc = 3.0

  // creating another position and an icrease of 9
  pos2 = 0.0
  inc2 = 9.0
}
function draw () {
  // clearing so that it clears previous steps and that we get a clean bg
  clear()
  background('lavender');

  // moving it to the middle of our canvas
  translate(width / 2, height / 2)

  // creating our sin values with the diff position and increases we created * sin
  var mySinVal = sin(pos)
  var mySinVal2 = sin(pos2)

  // using amplified to make things bigger
  amplified = mySinVal * 50
  amplified2 = mySinVal2 * 50

  // making a loop here with a bezier and adding both of the amplified created to change the
  // location and/or size, also using x and mySinVal to create intresting effects
  for (x = 0; x <= 360; x += 5) {
    stroke('fuchsia');
    strokeWeight(2)
    fill('orange');
    // spent a lot of time creating this effect! I was amazed how things can completely change
    // and of all the possibilities that can be done
    bezier(amplified, mySinVal, 10, amplified, amplified2, 90, amplified, mySinVal * x);
    rotate(x)
  }
  // the default range of values for hue is 0 to 360), so we have to reset hue to 0 once it reaches 360
  hue = (hue + 1) % 360
  // adding control to the sliders
  pos = pos + slider.value()
  pos2 = pos2 + slider2.value()

  // another loop with a different shape
  for (let i = 0; i < 5; i++) {
    // adding hue to the circle in the middle so that it changes color
    fill(hue, 90, 80);
    circle(1, 1, amplified2);
  }

  // another loop, it was fun adding the amplified to the strokeweight
  for (let z = 0; z < 15; z++) {
    // fill('fuchsia');
    strokeWeight(amplified - 2);
    point(1, 1);
  }
}
