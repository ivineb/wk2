const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards =[];
const gameState = {

};

let cardFaceArray = [];
let cardBack;
function preload() {
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
  background(0);
  let selectedFaces = [];
  for (let z = 0; z < 8; z++) {
    const randomIdx = floor(random(cardFaceArray.length));
    const face = cardFaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remoe the used cardface so it doesnt get randomly selected again
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
    this.show();
  }

  show () {
    if (this.face === DOWN) {
      fill('teal');
      rect(this.x, this.y, this.width, this.height, 10);
      image(cardBack, this.x, this.y);
    } else {
      fill('#aaa');
      rect(this.x, this.y, this.width, this.height, 10);
      image(this.cardFaceImg, this.x, this.y);
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

function mousePressed() {
  for (let k = 0; k < cards.length; k++) {
    if (cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
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
