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
    fill(this.colorFinal+cambioColorGlobal,65,this.colorFinal/2+cambioColorGlobal/2);
    square(this.x,this.y,anchocuadros);
    pop();
  }

}
