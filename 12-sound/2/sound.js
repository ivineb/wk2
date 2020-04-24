var song;
var fft;
var button;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('firefly.mp3');
}

function setup() {
  createCanvas(256, 256);
  angleMode(DEGREES);
  button = createButton('Toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 128);
}

function draw() {
  background(0);
  var spect = fft.analyze();
  stroke('cyan');
  for (var i = 0; i < spect.length; i++) {
    var amp = spect[i];
    var y = map(amp, 0, 245, height, 0);
    line(i, height, i, y * 2);
    rect(i, y, i, y);
  }
}
