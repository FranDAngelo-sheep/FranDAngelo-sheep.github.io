/*/////////////////////
ANCHO CUADRADO
//////////////////////*/

let anchocuadros = 38;

class cuadros{
      
  constructor(pX,pY,direc/*,paleta*/){
        this.x = pX;
        this.y = pY;
        this.direc = direc;
        this.vel = 5;
        /*paleta = paleta;*/
  }
  dibujar(){
    push();
    translate(50,50);
    noStroke();
    fill(0,0,(random(0,50)));
    square(this.x,this.y,anchocuadros);
    this.movimiento(this.direc);
    pop();
  }

  movimiento(direccion){
    this.dir = direccion ;
    if(this.dir == 1){
      this.x -= 1;
    } else if(this.dir == 2){
      this.x += 1;
    }
  }



}