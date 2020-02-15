const rectWidth = 150;
const rectHeight = 180;
let startingX = 50;
let startingY = 100;
const myCards = [];
let startingId = 0;
// let myFont;
/* function preload() {
  myFont = loadFont('assets/SangBleuKingdom.woff');
} */

function setup () {
  //  loadFont('assets/SangBleuKingdom.woff');
  createCanvas(1800, 800);
  background(30);
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 8; i++) {
      fill(0, 182, 182);
      rect(startingX, startingY, rectWidth, rectHeight);
      myCards.push({ x: startingX, y: startingY, id: startingId });
      startingX += 210;
      startingId++
    }
    startingY += 250;
    startingX = 50;
  }
  console.log(myCards);
}
function draw () {
    textSize(22);
    text('Score goes here', 50, 600);
    fill(0, 182, 182);
}

// I was trying the mousePressed for rectangles but it obviously didn't work, so i will just comment this out for now!
//  function mousePressed() {
//     if (mouseX > startingX && mouseX < startingX + rectWidth && mouseY > startingY && mouseY < rectHeight) {
//     console.log('square has been hit');
//     }
// }
