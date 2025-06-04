class rombos{
      
  constructor(pX,pY){
      this.x = pX;
      this.y = pY;
      this.ancho = 30;
      this.cambioColor= map(mouseX,0,width,0,200);
      
      this.paleta = [
      color(this.cambioColor+160, 65, 80),  
      color(this.cambioColor+120, 65, 50),        
      color(this.cambioColor+80, 65, 80),  
      color(this.cambioColor+40, 65, 70)];

      this.colorFinal = this.colorRandom();
  }
  dibujar(){
    push();
    translate(64,94);
    noStroke();
    fill(random([0,100,this.colorFinal]));
    quad(this.x,this.y,this.x+this.ancho,this.y-this.ancho,this.x+this.ancho*2,this.y,this.x+this.ancho,this.y+this.ancho);
    pop();
  }

  colorRandom(){
    var c = random(this.paleta);
    return c;
  }
}
