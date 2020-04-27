var dropkick;
var pedal;
var metal;
var drill;
var drill2;
var plate;
var shovel;
var smash;
var glass;
var cling;
var shatter;
const size = 400;
// var allSounds = [dropkick, pedal, metal, drill, drill2, plate, shovel, smash, glass, cling, shatter];

function preload () {
  dropkick = loadSound('dropkick.mp3');
  pedal = loadSound('pedal-braking.mp3');
  metal = loadSound('metal.mp3');
  drill = loadSound('drill.mp3');
  drill2 = loadSound('drill2.mp3');
  plate = loadSound('plate.mp3');
  shovel = loadSound('shovel.mp3');
  smash = loadSound('smash.mp3');
  glass = loadSound('glass.mp3');
  cling = loadSound('cling.mp3');
  shatter = loadSound('shatter.mp3');
}

function setup () {
  createCanvas(size, size);
  amp = new p5.Amplitude();
}
function draw () {
  background(25);

  const level = amp.getLevel();
  // the ellipse chanegs its size according to the map and level
  const size = map(level, 0, 0.3, 20, 800);
  fill(0, 255, 255, 200);
  ellipse(width / 2, height / 2, size, size);
}
function keyTyped () {
  if (key === 'a') {
    dropkick.play();
  } else if (key === 's') {
    pedal.play();
  } else if (key === 'd') {
    metal.play();
  } else if (key === 'f') {
    drill.play();
  } else if (key === 'g') {
    drill2.play();
  } else if (key === 'h') {
    plate.play();
  } else if (key === 'j') {
    shovel.play();
  } else if (key === 'k') {
    smash.play();
  } else if (key === 'l') {
    glass.play();
  } else if (key === 'e') {
    cling.play();
  } else if (key === 'r') {
    shatter.play();
  }
}
