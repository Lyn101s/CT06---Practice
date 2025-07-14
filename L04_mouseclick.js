// write your codes here
let shapeColor = "blue";

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // for(let i=0; i<5; i++) {
    //     fill(0, i*50, 0);
    //     circle(50 + i*50, 50 + i*50, 40);
        
    // }

    fill(shapeColor);
    circle(width/2, height/2, 100);

}

function mousePressed() {
    fill(random(255), random(255), random(255));
    shapeColor = "red";
}

function mouseReleased() {
    shapeColor = "blue";
}