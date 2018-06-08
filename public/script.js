var socket = io.connect('http://localhost:8080');


function setup() {
    createCanvas(710, 400);
    background(200);
}

function draw() {
    stroke(600);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}