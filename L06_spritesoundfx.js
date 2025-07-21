// write your codes here

let soundEffect, bgMusic, staticImage;

function preload() {
    soundEffect = loadSound('assests/pop.mp3');
    bgMusic = loadSound('assests/bossaNova.mps');
    staticImage = loadImage('assests/pico-a.png');
}

function setup() {
    createCanvas(200, 200);
    bgMusic.loop()
}

function draw() {

}

function keyPressed() {

}