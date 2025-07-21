function setup() {
 createCanvas(400, 200);
 background(220);
}

function draw() {
    //challenge 1
    // for(let i=0; i<8; i++) {
    // fill(255 - i*30);
    // noStroke();
    // rect(20+ i*40, 50, 30, 30);
    // }

    //challenge 2
    for (let i=0; i < 25; i++) {
        fill(255-i*10);
        noStroke();
        rect(10+i*30, 50, 30, 30);
    }
}