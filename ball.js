class Ball{

    constructor(x,y,r){

        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.1,
            density:0.001
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r/2,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}   
