//https://youtu.be/E2u8hudlBG4

let mic;
let amp = 0.01;

//Cambia el tamaño de la grilla

let anchocuadros = 57;

// variables de color y modificacion


let cambioColorGlobal; //hace que los cuadrados y rombos cambien de color y ligeramente de brillo
let cambioLugar; //modifica el como se mueven los cuadrados
let saturacionRombos = []; //selecciona que rombos son blancos, negros o de color
let coloresCuadros = []; //almacena los colores asignados a cada cuadrado
let coloresRombos = [];  //almacena los colores asignados a cada rombo


// variables de configuracion

let AMP_MIN = 0.001;
let AMP_MAX = 0.1;
let audioContext;

/*SETUP///////////////////////////////////////////////////////////////////////////////////////////*/

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100,100);
  audioContext = getAudioContext();
  mic = new p5.AudioIn(); // crear un nuevo objeto de tipo AudioIn
  mic.start(); // inicializo el audio incluyencto la función de analisis de frecuencia

  userStartAudio();

 let paletaCuadros, paletaRombos; 
 
  
  // Creamos las paletas de colores fijas
  paletaCuadros = [
    160,  
    120,        
    80,  
    40
  ];
  
  paletaRombos = [
    160,  
    120,        
    80,  
    40
  ];
  
  

  // Pre-asignamos los colores para todos los cuadrados
  for (let x1 = 0; x1 < anchocuadros*16; x1 += anchocuadros) {
    for (let y1 = 0; y1 < anchocuadros*8; y1 += anchocuadros*2) {
      coloresCuadros.push(random(paletaCuadros));
    }
  }
  
  for (let x2 = anchocuadros*7; x2 > anchocuadros*-16; x2 -= anchocuadros) {
    for (let y2 = anchocuadros; y2 < anchocuadros*8; y2 += anchocuadros*2) {
      coloresCuadros.push(random(paletaCuadros));
    }
  }
  
  // Pre-asignamos los colores para todos los rombos
  for (let x = anchocuadros-anchocuadros/3; x < anchocuadros*12; x += anchocuadros*2) {
    for (let y = anchocuadros-anchocuadros/3; y < anchocuadros*12; y += anchocuadros*2) {
      coloresRombos.push(random((paletaRombos)));
    }
  }

  for (let x = anchocuadros-anchocuadros/3; x < anchocuadros*12; x += anchocuadros*2) {
    for (let y = anchocuadros-anchocuadros/3; y < anchocuadros*12; y += anchocuadros*2) {
      saturacionRombos.push(random([0, 1, 2]));
    } 
  }
}

/*DRAW/////////////////////////////////////////////////////////*/

function draw() {
  background(0)

  //amp = mic.getLevel();
if (mic) {
  amp = mic.getLevel();
  console.log(amp);
}
 // cambioColorGlobal= map(amp,AMP_MIN,AMP_MAX,0,200);

  cambioColorGlobal= map(mouseX,0,width,0,200); 
  cambioLugar=  map(mouseY,0,height,0,200);

  cuadros1(cambioLugar);
  
  cuadros2(cambioLugar);
  
  rombo(); 


/*LOS MARQUITOS, SE PORTAN MUY BIEN Y NO DAN PROBLEMAS*/
  marcos(41,8,96,150);
  marcos(165,2,83,105);
  fill(255);

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

function cuadros1(modificador) {
  let index = 0;
  for (let x1 = 0; x1 < anchocuadros*16; x1 += anchocuadros) {
    for (let y1 = 0; y1 < anchocuadros*8; y1 += anchocuadros*2) {
      const cuadro = new cuadros(x1-modificador, y1, coloresCuadros[index++]);
      cuadro.dibujar();
    }
  }
}

function cuadros2(modificador) {
  let index = Math.floor(anchocuadros*16/anchocuadros) * Math.floor(anchocuadros*8/(anchocuadros*2));
  for (let x2 = anchocuadros*7; x2 > anchocuadros*-16; x2 -= anchocuadros) {
    for (let y2 = anchocuadros; y2 < anchocuadros*8; y2 += anchocuadros*2) {
      const cuadro = new cuadros(x2+modificador, y2, coloresCuadros[index++]);
      cuadro.dibujar();
    }
  }
}

/*FUNCION DE LOS ROMBOS/////////////////////////////////////////////////////////////////////////*/

function rombo() {
  let index = 0;
  for (let x = anchocuadros-anchocuadros/3; x < anchocuadros*8; x += anchocuadros*2) {
    for (let y = anchocuadros-anchocuadros/3; y < anchocuadros*8; y += anchocuadros*2) {
      const rombo = new rombos(x, y, coloresRombos[index++], saturacionRombos[index++]);
      rombo.dibujar();
    }
  }
}


