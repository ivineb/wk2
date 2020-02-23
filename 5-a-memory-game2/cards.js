const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 170;
let cards = [];
let myFont;
const gameState = {
  totalPairs: 8,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};

let cardFaceArray = [];
let cardBack;
function preload() {
  // forgot about adding a font cause I was planning to back in assignment 4.a!
  myFont = loadFont('assets/SangBleuKingdom.woff');
  cardBack = loadImage('img/card-back-pattern.png');
  cardFaceArray = [
    loadImage('img/1.jpg'),
    loadImage('img/2.jpg'),
    loadImage('img/3.jpg'),
    loadImage('img/4.jpg'),
    loadImage('img/5.jpg'),
    loadImage('img/6.jpg'),
    loadImage('img/7.jpg'),
    loadImage('img/8.jpg')
  ]
}

function setup() {
  createCanvas(1600, 800);
  let selectedFaces = [];
  for (let z = 0; z < 8; z++) {
    const randomIdx = floor(random(cardFaceArray.length));
    const face = cardFaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface so it doesnt get randomly selected again
    cardFaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 8; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 180;
    }
    startingY += 200;
    startingX = 100;
  }
}

class Card {
  constructor (x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 180;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  show () {
    if (this.face === UP || this.isMatch) {
      fill('#aaa');
      rect(this.x, this.y, this.width, this.height);
      image(this.cardFaceImg, this.x, this.y);
    } else {
      fill('teal');
      rect(this.x, this.y, this.width, this.height);
      noStroke();
      image(cardBack, this.x, this.y);
    }
  }

  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
          mouseY >= this.y && mouseY <= this.y + this.height) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }

  flip () {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}

function draw() {
  background('#434e52');
  if (gameState.numMatched === gameState.totalPairs) {
    fill('teal');
    textFont(myFont);
    textSize(66);
    text('You win!!!', 600, 625);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if (!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill('#fffdf9');
  textFont(myFont);
  textSize(36);
  text('Attempts ' + gameState.attempts, 100, 700);
  text('Matches ' + gameState.numMatched, 100, 650);
  textSize(28);
  text('Make those pairs match.', 100, 100);
}

function mousePressed() {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards length, and then
    // we can trigger the flip
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
      // cards match! time to score!
      // mark cards as matched so they don't flip back
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty the flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1000)
    }
  }
}

function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    // pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}
