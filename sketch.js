

let mic;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100,100);
   

  /*mic = new p5.AudioIn();
  mic.start();*/
}
/*
function mousePressed() {
    if (mic) {
        mic.start();
    }
}
*/

/*FUNCION DE LOS MARCOS, HACE LOS MARCOS (DUH)////////////////////////////////////////////////////*/
function marcos(color,saturacion,brillo,grosor){
  push();
  stroke(color,saturacion,brillo)
  strokeWeight(grosor);
  line(0,0,width,0)
  line(width,0,width,height);
  line(width,height,0,height);
  line(0,height,0,0);
  pop();
}

/*DRAW///////////////////////////////////////////////////////////////////////////////////////////*/

function draw() {

frameRate(2)

  cuadro = [];
  rombo = []; 
  background(0);

/*PALETA DE COLORES, POR AHORA CAMBIA SEGUN EL MOUSEX*/

  let cambioLugar;
  cambioLugar= map(mouseY,0,height,0,240);

/*DISEÑO DE LOS CUADROS Y ROMBOS*/  

  for (let x1 = 0; x1 < anchocuadros*16; x1 += anchocuadros) {
    for (let y1 = 0; y1 < anchocuadros*8; y1 += anchocuadros*2) {
      cuadro[x1] = new cuadros(x1-cambioLugar, y1);
      cuadro[x1].dibujar();
    
    }
  }

    for (let x2 = anchocuadros*7; x2 > anchocuadros*-16; x2 -= anchocuadros) {
    for (let y2 = anchocuadros; y2 < anchocuadros*8; y2 += anchocuadros*2) {
      cuadro[x2] = new cuadros(x2+cambioLugar, y2);
      cuadro[x2].dibujar();
      
    }
  }

  for (let x = anchocuadros-anchocuadros/3; x < anchocuadros*8; x += anchocuadros*2) {
    for (let y = anchocuadros-anchocuadros/3; y < anchocuadros*8; y += anchocuadros*2) {
  
      rombo[x] = new rombos(x, y);
      rombo[x].dibujar();

    }
  }
/*LOS MARQUITOS, SE PORTAN MUY BIEN Y NO DAN PROBLEMAS*/
  marcos(41,8,96,150);
  marcos(165,2,83,105);

}
