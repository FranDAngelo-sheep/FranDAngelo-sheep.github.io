/*/////////////////////
ANCHO CUADRADO
//////////////////////*/

let anchocuadros = 57;

class cuadros{
      
  constructor(pX,pY){
      this.x = pX;
      this.y = pY;
      this.cambioColor= map(amp,AMP_MIN,AMP_MAX,0,200);

      this.paleta =  [
      color(this.cambioColor+160, 65, 80),  
      color(this.cambioColor+120, 65, 50),        
      color(this.cambioColor+80, 65, 80),  
      color(this.cambioColor+40, 65, 70)];

      this.colorFinal = this.colorRandom();
  }

  dibujar(){
    push();
    translate(75,75);
    noStroke();
    fill(this.colorFinal);
    square(this.x,this.y,anchocuadros);
    pop();
  }

  colorRandom(){
    
    var c = random(this.paleta)
    return c;
    
  }
}
