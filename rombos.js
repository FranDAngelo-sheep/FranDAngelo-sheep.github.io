class rombos{
      
  constructor(pX,pY,pColor,sColor){
      this.x = pX;
      this.y = pY;
      this.valor = sColor;
      this.mod = cambioLugar/50; //aumento la division porque se va a la chucha
      this.ancho = 30+this.mod;
      this.colorFinal = pColor;
      this.saturacion=0;
      this.brillo=0;
     
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
      this.brillo = 10+this.colorFinal/2+cambioColorGlobal/3
    }
    //mapeo la sicion del mouseY en el height y te devuelve un angulo pi
     let angulo = map(amp,AMP_MIN,AMP_MAX,0,PI);
     //hago que el 0,0 este en el centro de cada rombo
    translate(64 + this.x + this.ancho, 94 + this.y);
    //ROTAN LOS ROMBOSS  
    rotate(angulo);
        
    noStroke();
    fill(this.colorFinal+cambioColorGlobal,this.saturacion,this.brillo);
    quad(
     -this.ancho - this.mod, 0,                 // izquierda
    0, -this.ancho - this.mod,                 // arriba
    this.ancho + this.mod, 0,                  // derecha
   0, this.ancho + this.mod                   // abajo
    );
    pop();
  }

}
