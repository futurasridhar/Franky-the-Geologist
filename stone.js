class Stone{
	constructor(x,y)
	{
	    var options = {
        
		 restitution : 0.8,
         friction : 0.9,
         density : 12

		}
		this.x=x;
		this.y=y;
		this.width = 100 ;
        this.height = 50 ;
		this.stonebody=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.stonebody);

	}
	display()
	{
			var stonepos=this.stonebody.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER);
			strokeWeight(2);
			stroke("crimson");
			fill("maroon");
			rect(0,0,this.width,this.height);
			pop();
	}

}