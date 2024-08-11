/*// -- VARIÁVEIS GLOBAIS -- //
var screen = 1;
  //0 = main; 1 = jogo; 2 = instruções; 3 = créditos; 4 = perdeu

var wButton = 240, //largura do botão
    hButton = 50, //altura
    xButton = 230,
    yButton1 = 268, //jogar
    yButton2 = 326, //instruções
    yButton3 = 384, //créditos
    xCircButton = 100, //botão circular de retornar ao menu
    yCircButton = 600,
    dCircButton = 50; //diâmetro do botão circular
  //botões
  /*rect(xButton,yButton1,wButton,hButton,50);
    rect(xButton,yButton2,wButton,hButton,50);
    rect(xButton,yButton3,wButton,hButton,50);
    circle(xCircButton,yCircButton,dCircButton);*/

//assets
/*let bgMain,
    bgGame,
    foreGame,
    imgBard,
    imgBardJump,
    barrilUp,
    barrilDw,
    font;
  // Load
function preload() {
  bgMain = loadImage('/assets/taverna-bg1.jpg');
  bgGame = loadImage('/assets/taverna-bg2.jpg');
  foreGame = loadImage('/assets/woodenFloorForefront.jpg');
  barrilUp = loadImage('/assets/barril-cpy.png');
  barrilDw = loadImage('/assets/barril-inverso-cpy.png');
  imgBard = loadImage('/assets/bardo.png.png');
  imgBardJump = loadImage('/assets/bardo-jump-cpy.png');
  font = loadFont('/assets/HouseOfTheDragonBlack-YzBA4.otf');
}
*/
//--------------------------------------------------------------------

// -- TELAS -- //
/*function screenMain(){
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
}*/

//------------------------------------------------------------------------------------------------

// -- BOTÕES -- //
/*function menuButton(yButtonNumber,screenNumber){
  if (mouseX > xButton && mouseX < xButton+wButton && mouseY > yButtonNumber && mouseY < yButtonNumber+hButton){
    fill('rgba(159, 40, 13, 0.2)');
    stroke('rgba(155, 44, 18, 0.2)');
    rect(xButton,yButtonNumber,wButton,hButton,50);
    if (mouseIsPressed){
      screen = screenNumber;
    } 
  } else {
    noFill()
  }
}

// -- BOTÃO DE RETORNO -- //
function backButton(){
  //símbolo
  textSize(30);
  fill('rgba(255, 255, 255, 1)');
  text("↩",100,611);
  //círculo
  fill('rgba(255, 255, 255, 0.0)'); //transparente
  stroke('rgba(255, 255, 255, 0.4)');
  strokeWeight(1);
  circle(xCircButton,yCircButton,dCircButton);
  if (mouseX < xCircButton && mouseX > xCircButton-dCircButton && mouseY < yCircButton && mouseY > yCircButton-dCircButton || mouseX > xCircButton && mouseX < xCircButton+dCircButton && mouseY > yCircButton && mouseY < yCircButton+dCircButton){
    fill('rgba(159, 40, 13, 0.2)');
    stroke('rgba(155, 44, 18, 0.2)');
    strokeWeight(1);
    circle(xCircButton,yCircButton,dCircButton);
    if (mouseIsPressed) {
      screen = 0;
    }
  }
}*/

//------------------------------------------------------------------------------------------------

// -- SETUP -- //
function setup() {
  createCanvas(700, 700);
}

function draw() {
  if (screen == 0){
    screenMain();
    menuButton(yButton1,1);
    menuButton(yButton2,2);
    menuButton(yButton3,3);
  } else if (screen == 1){
    screenGame();
  } else if (screen == 2){
    screenInstructions();
  } else if (screen == 3){
    screenCredits();
  } else if (screen == 4){
    screenLoose();
  } 
}