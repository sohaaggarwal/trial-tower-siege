class Boxes{
constructor(x, y, width, height) {
  var options = {
      'restitution':0,
      'friction':0.2,
      'density':0.2
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display(){
  fill ("black");
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  rectMode(CENTER);
  rect(this.body.position.x, this.body.position.y, this.width, this.height);
  pop();
}
};
