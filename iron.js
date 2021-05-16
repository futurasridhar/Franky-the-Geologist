class Iron{
	constructor(x,y)
	{
	    var options = {
        
		 restitution : 0.8,
         friction : 3 ,
         density : 35

		}
		this.x=x;
		this.y=y;
		this.width = 150 ;
        this.height = 100 ;
		this.Ironbody=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
		World.add(world, this.Ironbody);

	}
	display()
	{
			var Ironpos=this.Ironbody.position;		
			push();
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER);
			strokeWeight(6);
			stroke("lightslategray");
			fill("grey");
			rect(0,0,this.width,this.height);
			pop();
	}

}