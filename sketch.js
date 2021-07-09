 var canvas,bg;
 var together;
 var tom,jerry;
 var tomImage1,tomImage2,tomImage3,tomImage4;
 var jerryImage1,jerryImage2,jerryImage3,jerryImage4;

function preload() {
 bg = loadImage("images/garden.png");
 tomImage1 = loadAnimation("images/cat1.png");
 tomImage2 = loadAnimation("images/cat2.png");
 tomImage3 = loadAnimation("images/cat3.png");
 tomImage4 = loadAnimation("images/cat4.png");
 jerryImage1 = loadAnimation("images/mouse1.png");
 jerryImage2 = loadAnimation("images/mouse2.png");
 jerryImage3 = loadAnimation("images/mouse3.png");
 jerryImage4 = loadAnimation("images/mouse4.png");
 
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870,600);
    tom.addAnimation("tomImage1");
    tom.scale = 0.2;

    jerry = createSprite(870,600);
    jerry.addAnimation("jerryImage1");
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
     if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX = 0;
       tom.addAnimation("tomImage3");
       tom.x =300;
       tom.scale=0.2;
       tom.changeAnimation("tomImage4");
       jerry.addImage("jerryImage4");
       jerry.scale=0.15;
       jerry.changeImage("jerryImage3");
     }
    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
      jerry.addAnimation("jerryImage2");
      jerry.changeAnimation("jerryImage3");
      jerry.frameDelay = 25;

      tom.velocityX = -5;
      tom.addImage("tomImage2");
      tom.changeAnimation("tomImage3");

  }
     


}
