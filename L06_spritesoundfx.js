// write your codes here

let soundEffect, bgMusic, staticImage;
let spriteX, spriteY, spriteSpeed;

function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(500, 500);
    // bgMusic.loop();
    spriteX = width/2;
    spriteY = height - 150; 
    spriteSpeed = 5;
}

function draw() {
    background('lightblue');
    image(staticImage, spriteX, spriteY, 110, 133);

    spriteX = constrain()

    if(keyIsDown(LEFT_ARROW)) {
        spriteX -= spriteSpeed;
    }

    if(keyIsDown(RIGHT_ARROW)) {
        spriteX +=spriteSpeed;
    }
}

function keyPressed() {
    if(keyCode===32) {
        soundEffect.play();
    }

}


