// -- VARIÁVEIS GLOBAIS -- //
var screen = 2;
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
  //parâmetros dos botões
    /*rect(xButton,yButton1,wButton,hButton,50);
      rect(xButton,yButton2,wButton,hButton,50);
      rect(xButton,yButton3,wButton,hButton,50);
      circle(xCircButton,yCircButton,dCircButton);*/

//assets
let bgMain,
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
