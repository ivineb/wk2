var angle = 0;
var offset = 0.9;
var scaler = 65; // how big it gets
var speed = 0.002;
var song;
var button;
var musicbutton;
let hue = 0;

// when we press the button the song & the loop pauses, when we press again they both play again
function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
    noLoop();
  } else {
    song.play();
    loop();
  }
}
// this function is only to play/pause music, i added it because i also liked the animation with no music, i thought it would be cool to see
function playMusic() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

// loading the song
function preload() {
  song = loadSound('da.mp3');
}

// creating the button, playing the song, and adding the amplitude
function setup() {
  createCanvas(700, 700);
  background(0);
  musicbutton = createButton('Music');
  musicbutton.mousePressed(playMusic);
  button = createButton('All of it');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  const level = amp.getLevel();
  const size = map(level, 0, 1, 20, 400);
  // moving the drawing to the middle of the canvas
  translate(width / 2, height / 2)

  // resetting hue to 0 once it reaches 360
  hue = (hue + 1) % 360

  // blue transparent fill
  fill(0, 0, 255, 60);

  // angle rotation
  var z = 5;

  // creating a rotation here and a loop while using the z value for the angle

  // navy rectangle spiral loop
  rotate(radians(z));
  for (var i = 5; i < height; i += 7) {
    var y1 = offset + cos(angle) * scaler;
    rotate(radians(y1));
    rect(i, 0, size, size);
    // rect(i, 0, size, i * size);
  }

  // bright circles in the middle loop
  for (var k = 2; k < width; k += 9) {
    var y2 = offset + cos(angle) * scaler;
    rotate(radians(y2));
    noStroke();
    fill(hue, 220, 250);
    circle(size, 0, 7, 7);
    // cyan circle in the middle changes its size
    fill('cyan');
    circle(y2, y1, 5, 5);
  }

  // loop for the many tiny circles all over forming a spiral
  for (var l = 2; l < width; l += 1.5) {
    var y3 = offset + cos(angle) * scaler;
    rotate(radians(y3));
    noStroke();
    fill(hue, 150, 290);
    circle(l, l, 5, 5);
    // adding some yellow dots that kinda disappears as if it needs more mess
    fill('yellow');
    ellipse(l * size, l * size, 5, 5);
  }
  angle += speed;
  z++;
}
