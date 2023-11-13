var x =0
var y =0
var r_b =50
var w =100
var r_s =20
var fc,fc1

var sound1
function preload(){
  sound1 = loadSound("mixkit-raising-me-higher-34.mp3.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}

function draw() {
  background(0)
  rectMode(CENTER)

  if(sound1.isPlaying())
  {   //音樂有播放時
   fc = map(analyzer.getLevel(),0,1,0,100)
   fc1 = map(analyzer.getLevel(),0,1,0,200)
  }
  else
  {   //音樂沒有播放
   fc = map(mouseX,0,width,0,100)
   fc1 = map(mouseY,0,width,0,200)
  }

  for(var y=0;y<=height+w/2;y=y+w){ 
    for(var x=0;x<=width+w/2;x=x+w){

  noFill()
  strokeWeight(4)
  stroke("#5fa8d3")
  rect(x+r_b,y+r_b,50+fc)

  noFill()
  strokeWeight(3)
  stroke("#d6ccc2")
  rect(x+w,y+w,20+fc)

  strokeWeight(4)
  ellipse(x,y,70+fc)
     }
  }
}

 function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play(); 
  }

}