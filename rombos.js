class rombos{
      
  constructor(pX,pY/*,paleta*/){
        this.x = pX;
        this.y = pY;
        this.ancho = 20;
        this.tercera = random(0,50);
        /*paleta = paleta;*/
  }
  dibujar(){
    push();
    translate(43,63);
    noStroke();
    fill(0,0,random([0,100,this.tercera]));
    quad(this.x,this.y,this.x+this.ancho,this.y-this.ancho,this.x+this.ancho*2,this.y,this.x+this.ancho,this.y+this.ancho);
    pop();
  }

}