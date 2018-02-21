function letter(){

    //has a specific letter to be pressed
    //if user presses that letter, the object disappears
    //when user succeeds, velocity increases
    //if user fails, the letter is destroyed
    //when user fails, velocity decreases

    var radShape = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",",",".","/",";","'","[","]"]
    //radShape.length = 33;

    //properties
    this.x = Math.random() * width;
    this.y = 0;
    this.gravity = 1;
    this.velocity = 0;
    this.speed = 0.5;
    this.chara = radShape[Math.floor(Math.random() * 33)];
    
    //this.textStyle(color(255,255,255));

    //methods
    this.show = function(){
        //ellipse(this.x, this.y, 50, 50);
        fill(255);
        text(this.chara,this.x,this.y);
        textSize(40);
        if(this.x < 30){
            this.x = 30;
        }else if(this.x > width - 30){
            this.x = width - 30;
        }
    }

    this.fall = function(){
        this.velocity += this.gravity;
        this.velocity *= this.speed;
        this.y += this.velocity;
    }

    this.offScreen = function(){
        if(this.y > height){
            return true;
        }else{
            return false;
        }
    }

    this.changeSpeed = function(){
        this.speed += 0.1;
    }
    
}