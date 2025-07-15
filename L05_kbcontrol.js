// write your codes here
let rectSize = 50; //rectSize

function setup() {
    createCanvas(400, 400);
}

function draw() {
    // background(220);
    // rect(width/2-rectSize/2, height/2-rectSize/2, rectSize, rectSize);

}

function keyPressed() {
    // rectSize *=2;
    randomCircles = random(5,20);

    for (let i =0; i<randomCircles; i++) {
        randX = random(width-randSize);
        randY = random(height-randSize);
        randColor = color()
    }

}

function keyReleased() {
    // rectSize = 50;
}
