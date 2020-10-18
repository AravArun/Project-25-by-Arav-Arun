class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius
    this.image= loadImage("paper.png");
    World.add(world, this.body);
    }
  display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    imageMode(CENTER);
    fill("white");
    image(this.image,this.body.position.x,this.body.position.y,60,120)
    circle(pos.x,pos.y,this.radius);
  }
  };