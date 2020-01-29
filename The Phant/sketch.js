var input;

function setup() {
   createCanvas(1200, 800);
   textSize(15);
   noStroke();

   val = createInput('');
   val.size(100, 20);
   val.position(80, 35);
}

function draw() {
   background(255);

   textSize(15);
   text('1936 Pounds', 200, 55);
   input = val.value();

   findValue();
}

function findValue(){
var pounds = input;
var dollars = dec(pounds*92.6296);
var livePhants = dec(pounds/100);
var deadPhants = dec(pounds/5);

textSize(50);
text("You have " + dollars + " 2020 dollars\n or in other words " +  livePhants+ " live 1936 elephants.\n or " + deadPhants + " dead 1936 Phants", 80, 220);
}

function dec(x){
  toRound = x*100;
  var rounded = round(toRound);
  var done = rounded/100;
  return(done);
}