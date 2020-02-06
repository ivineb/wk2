function setup () {
    createCanvas(600, 600);
}

function popArt(originX, originY, skyColor, sunColor1, sunColor2, waterColor, line1, line2, line3) {
    translate(originX, originY); // (x and y)
    // sky
    fill(skyColor);
    noStroke();
    rect(0, 0, 200, 100);
    // sun
    fill(sunColor1)
    circle(100, 100, 150)
    fill (sunColor2);
    circle(100, 100, 90);
    // water
    fill(waterColor);
    noStroke();
    rect(0, 100, 200, 100);
    // 3 lines below
    fill(line1);
    rect(30, 125, 137, 7);
    fill(line2);
    rect(30, 145, 137, 7);
    fill(line3);
    rect(45, 165, 110, 7);
}
function draw() {
    popArt(0, 0, '#c4e6e3', '#3b78bd', '#6e2164', '#d77cb2', '#b63b95', '#eeb5d3', '#c4e6e3');
    popArt(0, 200, '#6589c6', '#6e2164', '#c4e6e3', '#b63b95', '#c4e6e3', '#eeb5d3', '#6589c6');
    popArt(0, 200, '#c4e6e3', '#3b78bd', '#6e2164', '#d77cb2', '#b63b95', '#eeb5d3', '#c4e6e3');

    popArt(200, -400, '#6589c6', '#6e2164', '#c4e6e3', '#b63b95', '#c4e6e3', '#eeb5d3', '#6589c6');
    popArt(0, 200, '#c4e6e3', '#3b78bd', '#6e2164', '#d77cb2', '#b63b95', '#eeb5d3', '#c4e6e3');
    popArt(0, 200, '#6589c6', '#6e2164', '#c4e6e3', '#b63b95', '#c4e6e3', '#eeb5d3', '#6589c6');

    popArt(200, -400, '#c4e6e3', '#3b78bd', '#6e2164', '#d77cb2', '#b63b95', '#eeb5d3', '#c4e6e3');
    popArt(0, 200, '#6589c6', '#6e2164', '#c4e6e3', '#b63b95', '#c4e6e3', '#eeb5d3', '#6589c6');
    popArt(0, 200, '#c4e6e3', '#3b78bd', '#6e2164', '#d77cb2', '#b63b95', '#eeb5d3', '#c4e6e3');
}
