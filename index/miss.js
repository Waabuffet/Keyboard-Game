function miss(){
    this.x = windowWidth - 70;
    this.y = 80;
    this.miss = 0;

    this.show = function(){
        text(this.miss,this.x,this.y);
        textSize(40);
        fill(255,0,0);
    }

    this.addOne = function(){
        this.miss += 1;
    }
}