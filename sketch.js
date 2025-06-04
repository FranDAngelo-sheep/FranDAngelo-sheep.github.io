

let mic;

/*SETUP///////////////////////////////////////////////////////////////////////////////////////////*/

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100,100);
  mic = new p5.AudioIn();
  mic.start();
}


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

/*FUNCION DE LOS CUADRADOS, HORIZONTALES Y DESPUES VERTICALES////////////////////////////////////*/

function cuadros1(modificador){
    let cuadro = []

    for (let x1 = 0; x1 < anchocuadros*16; x1 += anchocuadros) {
    for (let y1 = 0; y1 < anchocuadros*8; y1 += anchocuadros*2) {
      cuadro[x1] = new cuadros(x1-modificador, y1);
      cuadro[x1].dibujar();
    
    }
  }
}

function cuadros2(modificador){
  let cuadro = []
  
    for (let x2 = anchocuadros*7; x2 > anchocuadros*-16; x2 -= anchocuadros) {
    for (let y2 = anchocuadros; y2 < anchocuadros*8; y2 += anchocuadros*2) {
      cuadro[x2] = new cuadros(x2+modificador, y2);
      cuadro[x2].dibujar();
      
    }
  }
}

/*FUNCION DE LOS ROMBOS/////////////////////////////////////////////////////////////////////////*/

function rombo(){
  let rombo = []

  for (let x = anchocuadros-anchocuadros/3; x < anchocuadros*8; x += anchocuadros*2) {
    for (let y = anchocuadros-anchocuadros/3; y < anchocuadros*8; y += anchocuadros*2) {
  
      rombo[x] = new rombos(x, y);
      rombo[x].dibujar();

    }
  }
}

/*DRAW///////////////////////////////////////////////////////////////////////////////////////////*/

function draw() {

frameRate(2)


  let cambioLugar;
  cambioLugar= map(mouseY,0,height,0,240);

  cuadros1(cambioLugar);
  
  cuadros2(cambioLugar);
  
  rombo(); 


/*LOS MARQUITOS, SE PORTAN MUY BIEN Y NO DAN PROBLEMAS*/
  marcos(41,8,96,150);
  marcos(165,2,83,105);

}
