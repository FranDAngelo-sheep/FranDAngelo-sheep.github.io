class rombos{
      
  constructor(pX,pY/*,paleta*/){
        this.x = pX;
        this.y = pY;
        this.ancho = 20;
        this.paleta = [
      color(300, 65, 100),  
      color(350, 65, 40),        
      color(240, 65, 100),  
      color(270, 65, 100)   
    ];
        
  }
  dibujar(){
    push();
    translate(43,63);
    noStroke();
    let c = random(this.paleta);
    fill(random([0,100,c]));
    quad(this.x,this.y,this.x+this.ancho,this.y-this.ancho,this.x+this.ancho*2,this.y,this.x+this.ancho,this.y+this.ancho);
    pop();
  }

}
