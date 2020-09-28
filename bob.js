class bob{
    constructor(x, y,radius) {
        var options = {
            
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius =radius; 
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0, 0, this.radius);
        pop();
        
      }


}