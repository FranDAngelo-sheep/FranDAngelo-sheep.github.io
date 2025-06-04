/*/////////////////////
ANCHO CUADRADO
//////////////////////*/

let anchocuadros = 57;

class cuadros{
      
  constructor(pX,pY,pColor){
      this.x = pX;
      this.y = pY;
      this.colorFinal = pColor;
  }

  dibujar(){
    push();
    translate(75,75);
    noStroke();
    fill(this.colorFinal);
    square(this.x,this.y,anchocuadros);
    pop();
  }

}
