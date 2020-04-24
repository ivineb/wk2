var song;
var button;

function setup () {
  createCanvas(400, 400);
  // loading the song here from the youtube free sound library
  song = loadSound('stranger_danger.mp3', loaded);
  // creating the play button and adding mousepressed to toggle
  button = createButton('Play');
  button.mousePressed(togglePlaying);
  // amplitude to control the size of the shape according to the amp
  amp = new p5.Amplitude();
}

// i added 'loaded' above so that it loads faster, but it looks like i still need to add the function for it to load
function loaded () {
  console.log('loaded');
}

// making the play button works so that we can play and pause
function togglePlaying () {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('pause');
  } else {
    song.pause();
    button.html('play');
  }
}

function draw () {
  background(25);

  const level = amp.getLevel();
  const size = map(level, 0, 0.3, 10, 200);
  // the ellipse changes its color the more time passes
  fill(song.currentTime() * 40, 0, 255);
  // the ellipse chanegs its size as well according to the map and level
  ellipse(width / 2, height / 2, size, size);
}
