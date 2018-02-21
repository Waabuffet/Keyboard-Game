var letters = [];
var hit,miss;
var fallSpeed = 70;
function setup() {
  createCanvas(windowWidth,windowHeight-4);
  letters.push(new letter());
  hit = new score;
  miss = new miss;
}

function draw() {
  background(51);
  hit.show();
  miss.show();
  for (var i = letters.length-1; i >= 0; i--){
    letters[i].show();
    letters[i].fall();

    if(letters[i].offScreen()){
      letters.splice(i,1);
      miss.addOne();
    }

    if(letters[i].chara == keyPressed()){
      letters.splice(i,1);
      hit.addOne();
      letters[i].changeSpeed();
      fallSpeed -= 1;
    }

  }
  
  if (frameCount % fallSpeed == 0){
    letters.push(new letter());
  }

  

}
function keyPressed(){
  return key;
}

function addLetter(){
  //adds new letter when user strikes or misses
}