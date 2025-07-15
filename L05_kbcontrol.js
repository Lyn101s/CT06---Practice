// write your codes here
let rectSize = 50; //rectSize

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    rect(width/2-rectSize/2, height/2-rectSize/2, rectSize, rectSize);

}

function keyPressed() {
    rectSize *=2;
    
}

function keyReleased() {
    rectSize = 50;
}
