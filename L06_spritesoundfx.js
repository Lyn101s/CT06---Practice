// write your codes here

let soundEffect, bgMusic, staticImage;
let spriteX, spriteY;

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
}

function draw() {
    background('lightblue');
    image(staticImage, spriteX, spriteY, 110, 133);

    if(keyIsDown(LEFT_ARROW)) {
        spriteX -=5;
    }

    if(keyIsDown(RIGHT_ARROW)) {
        spriteX +=5;
    }
}

function keyPressed() {
    if(keyCode===32) {
        soundEffect.play();
    }

}


