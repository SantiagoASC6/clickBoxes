let value = "blue"
let value1 = "red"

function setup() {
    createCanvas(600,600);
}

function draw() {
    fill(value);
    rect(0,0,300,600);
    fill(value1)
    rect (300,0,300,600)
}
function mouseClicked() {
    if (value == "blue" && mouseX < 300 ) {
         value = "red";
     }
    else if (value == "red" && mouseX < 300) {
         value = "blue";
     }
     if (value1 == "red" && mouseX > 300) {
         value1 = "blue";
     }
     else if (value1 == "blue" && mouseX > 300) {
         value1 = "red";
     }
 }
