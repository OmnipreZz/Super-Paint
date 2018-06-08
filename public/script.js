var socket;


function setup() {
    createCanvas(1580, 600);
    background(200);
    
    socket = io.connect('http://localhost:8080');
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 15, 15);    
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);
    
    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);
    
    noStroke();
    fill(255, 255, 100);
    ellipse(mouseX, mouseY, 15, 15);   

}

