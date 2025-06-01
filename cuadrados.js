/*/////////////////////
ANCHO CUADRADO
//////////////////////*/

let anchocuadros = 57;



class cuadros{
      
  constructor(pX,pY){
        this.x = pX;
        this.y = pY;
        this.paleta = miPaleta;
      ;

  }
  dibujar(){
    push();
    translate(75,75);
    noStroke();
    this.colorRandom();
    square(this.x,this.y,anchocuadros);
    pop();
  }

  colorRandom(){
    
 
    let c = random(this.paleta);
    fill(c);

 
  }
}
