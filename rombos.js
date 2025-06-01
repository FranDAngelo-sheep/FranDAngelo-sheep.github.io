class rombos{
      
  constructor(pX,pY){
        this.x = pX;
        this.y = pY;
        this.ancho = 30;
        this.paleta = miPaleta;
        
  }
  dibujar(){
    push();
    translate(64,94);
    noStroke();
    this.colorRandom();
    quad(this.x,this.y,this.x+this.ancho,this.y-this.ancho,this.x+this.ancho*2,this.y,this.x+this.ancho,this.y+this.ancho);
    pop();
  }

  colorRandom(){
    
    let c = random(this.paleta);
    fill(random([0,100,c]));
    
  }
}
