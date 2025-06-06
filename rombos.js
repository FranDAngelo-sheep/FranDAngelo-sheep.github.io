class rombos{
      
  constructor(pX,pY,pColor,sColor){
      this.x = pX;
      this.y = pY;
      this.valor = sColor;
      this.ancho = 30;
      this.colorFinal = pColor;
      this.saturacion
      this.brillo
  }
  dibujar(){
    push();
    if(this.valor == 0){
      this.saturacion = 0
      this.brillo = 0
    } else if(this.valor == 1){
      this.saturacion = 0
      this.brillo = 100
    } else if(this.valor == 2){
      this.saturacion = 65
      this.brillo = this.colorFinal/2+cambioColorGlobal/2
    }
    translate(64,94);
    noStroke();
    fill(this.colorFinal+cambioColorGlobal,this.saturacion,this.brillo);
    quad(
      this.x,this.y,
      this.x+this.ancho,this.y-this.ancho,
      this.x+this.ancho*2,this.y,
      this.x+this.ancho,this.y+this.ancho);
    pop();
  }

}
