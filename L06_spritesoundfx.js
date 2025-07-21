// write your codes here

let soundEffect, bgMusic, staticImage;

function preload() {
    soundEffect = loadSound('https://prod.liveshare.vsengsaas.visualstudio.com/join?195E29163997A27FCCDBD2AF8452B5222438');
    bgMusic = loadSound('assests/bossaNova.mps');
    staticImage = loadImage('assests/pico-a.png');
}

function setup() {
    createCanvas(200, 200);
    bgMusic.loop();
}

function draw() {
    background
    staticImage();
}

function keyPressed() {

}