//Your Drawing

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background("cadetblue");

  stroke("white");
  fill("black");
  ellipse(400,500,600,600);//outer circle

  //right side
  stroke("white");
  line(400,500,600,720);
  line(410,520,675,690);



  line(400,490,600,720);
  line(410,490,600,720);



  stroke("white");
  line(400,500,680,400);

  //left side
  stroke("white");
  line(100,50,400,500);


  stroke("black");
  fill("white");
  ellipse(400,500,200,200);//inner circle

  fill("black");
  ellipse(400,500,20,20);//inner inner circle

  ellipse(windowWidth/2,windowHeight/2,100,100);
}
