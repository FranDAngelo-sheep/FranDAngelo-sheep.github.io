let miPaleta=[];

let cambioColor;
let cambioLuz;

let mic;

function setup() {
  createCanvas(400, 400);
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
/*VELOCIDAD EN LA QUE CAMBIA EL CUADRO*/ 
  if(frameCount % 50 == 0){
  background(0);

/*PALETA DE COLORES, POR AHORA CAMBIA SEGUN EL MOUSEX*/
  cambioColor= map(mouseX,0,width,0,200);
  cambioLuz= map(mouseY,0,height,10,40);
  miPaleta=[
      color(cambioColor+160, 65, cambioLuz+50),  
      color(cambioColor+120, 65, cambioLuz+30),        
      color(cambioColor+80, 65, cambioLuz+50),  
      color(cambioColor+40, 65, cambioLuz+50)    
    ];

/*DISEÑO DE LOS CUADROS Y ROMBOS*/  

   cuadro = [];
   rombo = [];

  for (let x1 = 0; x1 < anchocuadros*16; x1 += anchocuadros) {
    for (let y1 = 0; y1 < anchocuadros*8; y1 += anchocuadros*2) {
      cuadro[x1] = new cuadros(x1-cambioColor, y1,1);
      cuadro[x1].dibujar();
    cuadro[x1].movimiento();
    }
  }

    for (let x2 = anchocuadros*7; x2 > anchocuadros*-16; x2 -= anchocuadros) {
    for (let y2 = anchocuadros; y2 < anchocuadros*8; y2 += anchocuadros*2) {
      cuadro[x2] = new cuadros(x2+cambioColor, y2,2);
      cuadro[x2].dibujar();
      cuadro[x2].movimiento();
    }
  }

  for (let x = anchocuadros-anchocuadros/3; x < anchocuadros*8; x += anchocuadros*2) {
    for (let y = anchocuadros-anchocuadros/3; y < anchocuadros*8; y += anchocuadros*2) {
  
      rombo[x] = new rombos(x, y);
      rombo[x].dibujar();

    }
  }
/*LOS MARQUITOS, SE PORTAN MUY BIEN Y NO DAN PROBLEMAS*/
  marcos(41,8,96,100);
  marcos(165,2,83,70);
}
}
