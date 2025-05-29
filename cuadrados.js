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
        this.paleta = [
      color(300, 65, 100),  
      color(350, 65, 40),        
      color(240, 65, 100),  
      color(270, 65, 100)   
    ];

  }
  dibujar(){
    push();
    translate(50,50);
    noStroke();
    let c = random(this.paleta)
    fill(c);
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



}
