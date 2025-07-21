// write your codes here

let soundEffect, bgMusic, staticImage;

function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(200, 200);
    bgMusic.loop();
}

function draw() {
    background('lightblue');
    staticImage(staticImage, 0, 0, 110, 133);
}

function keyPressed() {
    if(keyCode===32) {
        soundEffect.play();
    }
}