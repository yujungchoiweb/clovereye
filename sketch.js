let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  fill("white");
  noCursor();
  
}

function draw() {
  background("white");
  eye(width/2,height/2);
  
  fill("lightgreen")
  noStroke();
  
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  
  Cursor(mouseX, mouseY)
  
  function eye(x,y){
  push();
   translate(x,y);
  let center = createVector(x,y);
  let mouse = createVector(mouseX,mouseY);
  
  let move = p5.Vector.sub(mouse,center);
  move.mult(0.15);
  move.limit(35);
    
  if (mouseIsPressed === true) {
  
     //피부
  noStroke ();
  fill("#FFA778")
  square(-200,-200,400)
    
  //아이라인
  noStroke();
  fill("#505050");
  ellipse(0,-3,255,210);
     
     
  //윗눈썹 중앙
  strokeWeight(8);
  stroke("#505050");
  line(0,0,0,150);
  //윗눈썹 오른쪽
  line(0,0,90,130,);
  //윗눈썹 왼쪽
  line(0,0,-90,130,); 
 
    
  //눈꺼풀
  noStroke();
  fill("#FFCA9B");
  ellipse(0,-25,260,240);
    
  pop();

} else {
    
  //피부
  noStroke ();
  fill("#FFA778")
  square(-200,-200,400)
    
    //눈꺼풀
  noStroke();
  fill("#FFCA9B");
  ellipse(0,-25,260,240);
  
    //윗눈썹 중앙
  strokeWeight(8);
  stroke("#505050");
  line(0,-10,0,-160);
  //윗눈썹 오른쪽
  line(0,-10,90,-140,);  
  //윗눈썹 왼쪽
  line(0,-10,-90,-140,); 
    
  //아이라인
  noStroke();
  fill("#505050");
  ellipse(0,-10,255,210);
  
  
  //눈알
  noStroke();
  fill("#F4FFFF");
  ellipse(0,0,250,210);

  
  
  translate(move.x,move.y);
  noStroke();
  fill("#64CD3C");

    
  //위잎
  triangle(0,0,-40,-50,+40,-50);
  circle(-20,-50,37);
  circle(20,-50,37);
  
  //아래잎
  triangle(0,0,-40,50,40,50);
  circle(-20,50,37);
  circle(20,50,37);
  
  //오른쪽잎
  triangle(0,0,50,-40,50,40);
  circle(50,-20,37);
  circle(50,20,37);
  
  //왼쪽잎
  triangle(0,0,-50,-40,-50,40);
  circle(-50,-20,37);
  circle(-50,20,37);
  
  //중앙
  circle(0,0,62)
  
  fill("darkgreen")
  strokeWeight(3);
  stroke("#54BD54");
  line(0,0,0,38);
  line(0,0,38,0);
  line(0,0,0,-38);
  line(0,0,-38,0);
  
  //동공
  stroke("#41A541");
  strokeWeight(6)
  circle(0,0,40)
  
  pop();
  
}
  
}
  
}

function Cursor(x,y) {
  push()
  translate(x, y)
  
  if (mouseIsPressed === true) {
  noStroke();
  fill("black");
  ellipse(-8, -8, 20, 20);
 
  strokeWeight(3);
  stroke("black");
    //왼쪽 다리
    line(0,0,0,22);
    line(0,0,-16,16);
    line(0,0,-22,4);
    //오른쪽 다리
    line(0,0,3,-22);
    line(0,0,16,-16);
    line(0,0,23,-3);
    
    strokeWeight(2);
    //더듬이
    line(-10,-15,-16,-21);
    line(-15,-10,-21,-16);
  
   noStroke();
  fill("red");
  ellipse(0, 0, 30, 30);

    //점
     noStroke();
  fill("black");
  ellipse(8,-3, 9, 9);
  ellipse(-7, -5, 7, 7);
  ellipse(1,9, 8, 8);

  pop()
    
} else{
  
  noStroke();
  fill("black");
  ellipse(-8, -8, 20, 20);
 
  strokeWeight(3);
  stroke("black");
    //왼쪽 다리
    line(0,0,0,22);
    line(0,0,-16,16);
    line(0,0,-22,4);
    //오른쪽 다리
    line(0,0,3,-22);
    line(0,0,16,-16);
    line(0,0,23,-3);
  
    strokeWeight(2);
    //더듬이
    line(-10,-15,-16,-21);
    line(-15,-10,-21,-16);
  
  noStroke();
  fill("black");
  ellipse(0, 0, 20, 20);
  
   noStroke();
  fill("#EBF5FF");
  ellipse(6,-6, 39, 12);
  ellipse(-6,6, 12, 39);
  
  noStroke();
  fill("red");
  ellipse(3,-10, 30, 12);
  ellipse(-10,3, 12, 30);
 

  //점
  noStroke();
  fill("black");
  ellipse(8,-10, 9, 6);
  ellipse(-7, -5, 7, 7);
  ellipse(-9,9, 5, 8);



  pop()
  
  }
}
     