// -- TELAS -- //
function screenMain(){
  background(bgMain,255);
  //header
  textSize(80);
  stroke("rgba(0, 0, 0, 0.8)");
  strokeWeight(3);
  fill('rgba(159, 40, 13, 1)');
  textAlign(CENTER);
  textFont(font);
  text("Floppy  Bard",350,140);
  //menu
  textSize(30);
  stroke('rgba(0, 0, 0, 0.4)');
  fill('rgba(255, 255, 255, 1)');
  textFont('Georgia');
  text("jogar",350,300);
  text("instruções",350,360);
  text("créditos",350,420);  
}

function screenInstructions(){
  background(bgMain,255);
  //header
  textSize(50);
  stroke('rgba(0, 0, 0, 0.6)');
  strokeWeight(3);
  fill('rgba(255, 255, 255, 1)');
  textAlign(CENTER);
  textFont(font);
  text("I n s t r u ç õ e s",350,110);
  //corpo
  textSize(30);
  stroke('rgba(0, 0, 0, 0.6)');
  strokeWeight(2);
  fill('rgba(255, 255, 255, 1)');
  textFont('Georgia');
  text("yaf bdfjabhfja hdbfjaf ygbfhbaf dfaf",350,360);
  backButton();
}

function screenCredits(){
  background(bgMain,255);
  //header
  textSize(50);
  stroke('rgba(0, 0, 0, 0.6)');
  strokeWeight(3);
  fill('rgba(255, 255, 255, 1)');
  textAlign(CENTER);
  textFont(font);
  text("C r é d i t o s",350,110);
  //corpo
  textSize(25);
  stroke('rgba(0, 0, 0, 0.6)');
  strokeWeight(2);
  fill('rgba(255, 255, 255, 1)');
  textFont('Georgia');
  textWrap(CHAR);
  textAlign(CENTER);
  text("Jogo feito como projeto para a matéria de Lógica de Programação, no primeiro período do curso de CeT da UFRN.",105,200,540,330);
  text("Professor: Orivaldo Vieira de Santana Junior",100,390,530,330);//360
  text("Dev: Marina Pereira Silva de Carvalho",100,420,530,330);//385
  image(imgBard,430,420,300,300)
  backButton();
}

function screenGame(){
  background(bgGame,255);
  image(foreGame,0,650,700,170);
  image(imgBardJump,0,480,190,190);
  image(barrilUp,200,470,120,300);
  image(barrilDw,200,-90,120,290);
  //
  textSize(50);
  stroke('rgba(0, 0, 0, 0.6)');
  strokeWeight(3);
  fill('rgba(255, 255, 255, 1)');
  textAlign(CENTER);
  textFont(font);
  text("H",350,110);
}

function screenLoose(){
  background(220);
  //header
  textSize(50);
  stroke(15);
  fill('black');
  textAlign(CENTER);
  textFont(font);
  text("Oooooops...",350,360);
  backButton();
}