// write your codes here

let soundEffect, bgMusic, staticImage;

function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mps');
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(200, 200);
    bgMusic.loop();
}

function draw() {
    background('lightblue')
    staticImage();
}

function keyPressed() {

}