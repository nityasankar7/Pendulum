class rope{
    constructor(Abody,Bbody,offsetX,offsetY){
    this.offsetX=offsetX;
    this.offsetY=offsetY;
    var options={//JSON
        bodyA:Abody,
        bodyB:Bbody,
        pointB:{x:this.offsetX,y:this.offsetY}
    
    }
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
    strokeWeight(5);
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
    }