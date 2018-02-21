function score(){

    this.x = windowWidth - 70;
    this.y = 40;
    this.hit = 0;

    this.show = function(){
        text(this.hit,this.x,this.y);
        textSize(40);
    }

    this.addOne = function(){
        this.hit += 1;
    }

}