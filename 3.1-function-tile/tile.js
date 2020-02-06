function setup () {
    createCanvas(200, 200);
}

function popArt() {
    translate(0, 0); // (x and y)
    // sky
    fill('#c4e6e3');
    noStroke();
    rect(0, 0, 200, 100);
    // sun
    fill('#3b78bd')
    circle(100, 100, 150)
    fill ('#6e2164');
    circle(100, 100, 90);
    // water
    fill('#d77cb2');
    noStroke();
    rect(0, 100, 200, 100);
    // 3 lines
    fill('#b63b95');
    rect(30, 125, 137, 7);
    fill('#eeb5d3');
    rect(30, 145, 137, 7);
    fill ('#c4e6e3');
    rect(45, 165, 110, 7);
}

function draw() {
    popArt();
    noLoop();
}
