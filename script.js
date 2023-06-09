function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES)
}

function draw() {
    background(0);
    translate(300, 300);
    rotate(-90);
    
    let hr = hour();
    let mn = minute();
    let sc = second();
    
    // Clock's outer circle
    stroke(255);
    ellipse(0, 0, 310, 310);
    
    strokeWeight(8);
    noFill();
    
    // Angle determination
    stroke(255, 100, 150);
    let secondAngle = map(sc, 0, 60, 0, 360);
//    arc(0, 0, 300, 300, 0, secondAngle);
    
    stroke(150, 100, 255);
    let minuteAngle = map(mn, 0, 60, 0, 360);
//    arc(0, 0, 280, 280, 0, minuteAngle);
    
    stroke(150, 255, 100);
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
//    arc(0, 0, 260, 260, 0, hourAngle);
    
    // Seconds Hand
    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 125, 0);
    pop();
    
    // Minutes Hand
    push();
    rotate(minuteAngle);
    stroke(150, 100, 255);
    line(0, 0, 100, 0);
    pop();
    
    // Hours Hand
    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0, 0, 75, 0);
    pop();
    
    stroke(255);
    point(0, 0);
    
//    fill(255);
//    noStroke();
//    text(hr + ':' + mn + ':' + sc, 10, 200);
}