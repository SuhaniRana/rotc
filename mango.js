class Mango{

			
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		this.image = loadImage("mango.png");

	}
	display()
	{
			
			var mangoPosition=this.body.position;		
			
			push()
			translate(mangoPosition.x, mangoPosition.y);
			imageMode(CENTER);
		    image(this.image, 100,0,this.r, this.r)
			
			fill(255,0,255)
			pop ();
			
			
	}



};