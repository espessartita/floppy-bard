// -- BOTÕES -- //
function menuButton(yButtonNumber,screenNumber){
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
}