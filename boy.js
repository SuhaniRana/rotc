class Boy{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.image = loadImage("boy.png"); 
        
        this.pointB = pointB
        this.boy = Constraint.create(options);
        World.add(world, this.boy);
    }
    

    display(){
       
       
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;
            push ();
            strokeWeight(10);
            stroke(48,22,8);
            imageMode(CENTER);
		 image(this.image, 400,100,200, 100)
            pop ();

    }





    };