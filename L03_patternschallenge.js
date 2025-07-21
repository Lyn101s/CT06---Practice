function setup() {
 createCanvas(400, 200);
 background(220);
}

function draw() {
    for(let i=0; i<5; i++) {
    fill(255 - i*50);
    noStroke();
    rect(20+ i*40, 50, 30, 30);
    }
}