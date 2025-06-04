class rombos{
      
  constructor(pX,pY,pColor){
      this.x = pX;
      this.y = pY;
      this.ancho = 30;
      this.colorFinal = pColor;
  }
  dibujar(){
    push();
    translate(64,94);
    noStroke();
    fill(this.colorFinal);
    quad(this.x,this.y,this.x+this.ancho,this.y-this.ancho,this.x+this.ancho*2,this.y,this.x+this.ancho,this.y+this.ancho);
    pop();
  }

}
