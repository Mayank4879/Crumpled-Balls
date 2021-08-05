class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2,
            'isStatic' : false
        }
         this.radius = radius
		 this.image=loadImage("paper.png");
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
		

   }
   display(){
    fill("white");
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
	
	imageMode(CENTER)
    
	image(this.image, this.body.position.x, this.body.position.y, this.radius+50, this.radius+50);
	
   }
}