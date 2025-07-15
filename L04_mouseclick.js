// write your codes here
let shapeColor = "blue";
let circleSize = 100;

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // for(let i=0; i<5; i++) {
    //     fill(0, i*50, 0);
    //     circle(50 + i*50, 50 + i*50, 40);
        
    // }

    // fill(shapeColor);
    // circle(width/2, height/2, 100);
    background(220);
    ellipse(width/2, height/2, circleSize, circleSize);

}

function mouseMoved() {
    fill('red');
    circleSize = mouseX;
    
}

// function mousePressed() {
//     shapeColor = "red";
    
// }

// function mouseReleased() {
    
//     shapeColor = color(random(255), random(255), random(255));
// }