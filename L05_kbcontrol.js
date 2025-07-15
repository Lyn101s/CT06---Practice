// write your codes here
//let rectSize = 50; //rectSize
//let showCircle = false;
let x = 200;
let y = 200;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    // background(220);
    // // rect(width/2-rectSize/2, height/2-rectSize/2, rectSize, rectSize);

    // if (key === 'c') {
    //     circle(width/2, height/2, 100);
    // }

    // if (key === 't') {
    //     triangle(width/2 -50, height/2 + 50, width/2, height/2 - 50, width/2 +50, height/2+50);
    // }

    // if (key === 's') {
    //     rect(width/2 -100/2, height/2 -100/2, 100, 100);
    // }

    background(220);
    

    if (keyIsDown(LEFT_ARROW)) {
        x -=5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        x +=5;
    }

    if (keyIsDown(UP_ARROW)) {
        y -=5;
    }

    if (keyIsDown(DOWN_ARROW)) {
        y +=5;
    }

    x = constrain(x,0,width);
    y = constrain(y,0, height);
    circle(x,y,40);
}

// function keyPressed() {
//     // rectSize *=2;
//     // randomCircles = random(5,20);

//     // for (let i =0; i<randomCircles; i++) {
//     //     randSize = random(20,100);
//     //     randX = random(width-randSize);
//     //     randY = random(height-randSize);
//     //     randColor = color(random(255), random(255), random(255));

//     //     fill(randColor);
//     //     circle(randX, randY, randSize);
        
//     // }

//     if (key === 'c') {

//         if (showCircle === true){
//             showCircle = false;
//         }
//         else{
//             showCircle = true;
//         }

//         // showCircle = !showCircle; 
//     }

// }

// function keyReleased() {
//     // rectSize = 50;
//     //background(220);
// }
