class Box{
    constructor(x, y, width, height){
        var options = {
            'restitution': 0.4,
            'friction': 0,
            //'density': 0.1,
            }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        
        if(this.body.speed < 3){            
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            fill("red");
            rect(0,0, this.width, this.height);
            pop();

        }
        else{                 
            World.remove(world, this.body);
            push();
            this.visiblity = this.visiblity - 1;
            
            if(this.visiblity<=0 && this.visiblity>= -10 ){
                score = score+10;
            }
            
            //fill("green");
            //rect(this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
        
    }
    

}