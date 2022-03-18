var ball = {
  x:20,
  y:30,
  d:30,
  xspeed:0,
  yspeed:0,
  color:["yellow","purple","orange","blue"],
}; 




function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(ball.x,ball.y,ball.d);
  fill(ball.color[2])
  ball.xspeed = 1;
  ball.x+= ball.xspeed;
}