let palabraActual;

function reiniciarJuego(){
  
}

function crearPalabraSecreta() {
  const palabra = palabraAleatoria();
  document.getElementById("uno").style.visibility = "visible";
  document.getElementById("dos").style.visibility = "visible";

  dibujarGuiones(palabra.length);
  return palabra;
}
function iniciarJuego() {
  var btn_iniciar = document.getElementById("btn_iniciar");
  btn_iniciar.style.display = "none";
  btn_agregar.style.display='none';

  var juego = document.getElementById("juego");
  var hombre = document.getElementById("hombre");
  hombre.style.visibility = "hidden";
  juego.style.visibility = "visible";
  palabraActual = crearPalabraSecreta();
  console.log(palabraActual);
}

let errados = 0;
let aciertos = 0;
function letraPresionada(event) {
  if (event.keyCode < 65 || event.keyCode > 90) {
    alert("Debe seleccionar solo letras");
    return;
  } else {
    obtenerLetra(event.key);
  }
}
let contador = 0;

function obtenerLetra(letra) { 
  
if(palabraActual.includes(letra)){

  for (let index = 0; index < palabraActual.length; index++) {
    
    
    if (letra === palabraActual[index]) {
      dibujaLetra(letra, index);
      aciertos++;
      
      contador++;
    
     
    }
  }
}
    else { 
      errados++;
      contador++;
      dibujaHombre(errados);
      let letraAct=document.createTextNode(letra);
            
      document.getElementById("letraserradas").appendChild(letraAct);
      
    
  }
  if (aciertos===palabraActual.length) {
    setTimeout(ganaste, 500);
  }
  if(errados===8){
    setTimeout(perder, 500);
  }
  
}
function ganaste(){
 
  document.getElementById("ganaste").style.visibility="visible";
  document.getElementById("ganastes").style.visibility="visible";
  
}
function perder(){
  document.getElementById("perdiste").style.visibility="visible";
   document.getElementById("perdistes").style.visibility="visible";
  
}

function dibujaHombre(errados) {
  if (errados == 1) {
    document.getElementById("circle").style.visibility = "visible";
  }
  if (errados == 2) {
    document.getElementById("cuerpo").style.visibility = "visible";
  }
  if (errados == 3) {
    document.getElementById("brazos").style.visibility = "visible";
  }
  if (errados == 4) {
    document.getElementById("piernaizq").style.visibility = "visible";
  }
  if (errados == 5) {
    document.getElementById("piernader").style.visibility = "visible";
  }
  if (errados == 6) {
    document.getElementById("soga").style.visibility = "visible";
  }
  if (errados == 7) {
    document.getElementById("arriba").style.visibility = "visible";
  }
  if (errados == 8) {
    document.getElementById("lateral").style.visibility = "visible";
    document.getElementById("piso").style.visibility = "visible";
  }
}

//funcion que dibuja letra
function dibujaLetra(letra, index) {
  if (index === 1) {
    var text = document.createTextNode(letra);
    document.getElementById("spandos").appendChild(text);
  }
  if (index === 0) {
    var text = document.createTextNode(letra);
    document.getElementById("spanuno").appendChild(text);
  }
  if (index === 2) {
    var text = document.createTextNode(letra);
    document.getElementById("spantres").appendChild(text);
  }
  if (index === 3) {
    var text = document.createTextNode(letra);
    document.getElementById("spancuatro").appendChild(text);
  }
  if (index === 4) {
    var text = document.createTextNode(letra);
    document.getElementById("spancinco").appendChild(text);
  }
  if (index === 5) {
    var text = document.createTextNode(letra);
    document.getElementById("spanseis").appendChild(text);
  }
  if (index === 6) {
    var text = document.createTextNode(letra);
    document.getElementById("spansiete").appendChild(text);
  }
  if (index === 7) {
    var text = document.createTextNode(letra);
    document.getElementById("spanocho").appendChild(text);
  }
  if (index === 8) {
    var text = document.createTextNode(letra);
    document.getElementById("spannueve").appendChild(text);
  }
  if (index === 9) {
    var text = document.createTextNode(letra);
    document.getElementById("spandiez").appendChild(text);
  }
  if (index === 10) {
    var text = document.createTextNode(letra);
    document.getElementById("spanonce").appendChild(text);
    
  }
}



//funcion devuelve palabra aleatoria
function palabraAleatoria() {
  const ctdadPalabras = 10;
  const palabras = [
    "javascript",
    "html",
    "css",
    "programa",
    "lenguaje",
    "java",
    "mouse",
    "teclado",
    "desarrollo",
    "api",
  ];
  const indice = Math.round(Math.random() * (ctdadPalabras - 1 - 0) + 0);
  return palabras[indice];
}
//funcion para reiniciar
function reiniciar() {
  location.reload();
}

//funcion que me dibuja los guiones
function dibujarGuiones(numero) {
  if (numero === 3) {
    document.getElementById("tres").style.visibility = "visible";
  }
  if (numero === 4) {
    document.getElementById("tres").style.visibility = "visible";
    document.getElementById("cuatro").style.visibility = "visible";
  }
  if (numero === 5) {
    document.getElementById("tres").style.visibility = "visible";
    document.getElementById("cuatro").style.visibility = "visible";
    document.getElementById("cinco").style.visibility = "visible";
  }
  if (numero === 6) {
    document.getElementById("tres").style.visibility = "visible";
    document.getElementById("cuatro").style.visibility = "visible";
    document.getElementById("cinco").style.visibility = "visible";
    document.getElementById("seis").style.visibility = "visible";
  }
  if (numero === 7) {
    document.getElementById("tres").style.visibility = "visible";
    document.getElementById("cuatro").style.visibility = "visible";
    document.getElementById("cinco").style.visibility = "visible";
    document.getElementById("seis").style.visibility = "visible";
    document.getElementById("siete").style.visibility = "visible";
  }
  if (numero === 8) {
    document.getElementById("tres").style.visibility = "visible";
    document.getElementById("cuatro").style.visibility = "visible";
    document.getElementById("cinco").style.visibility = "visible";
    document.getElementById("seis").style.visibility = "visible";
    document.getElementById("siete").style.visibility = "visible";
    document.getElementById("ocho").style.visibility = "visible";
  }
  if (numero === 9) {
    document.getElementById("tres").style.visibility = "visible";
    document.getElementById("cuatro").style.visibility = "visible";
    document.getElementById("cinco").style.visibility = "visible";
    document.getElementById("seis").style.visibility = "visible";
    document.getElementById("siete").style.visibility = "visible";
    document.getElementById("ocho").style.visibility = "visible";
    document.getElementById("nueve").style.visibility = "visible";
  }
  if (numero === 10) {
    document.getElementById("tres").style.visibility = "visible";
    document.getElementById("cuatro").style.visibility = "visible";
    document.getElementById("cinco").style.visibility = "visible";
    document.getElementById("seis").style.visibility = "visible";
    document.getElementById("siete").style.visibility = "visible";
    document.getElementById("ocho").style.visibility = "visible";
    document.getElementById("nueve").style.visibility = "visible";
    document.getElementById("diez").style.visibility = "visible";
  }
  if (numero === 11) {
    document.getElementById("tres").style.visibility = "visible";
    document.getElementById("cuatro").style.visibility = "visible";
    document.getElementById("cinco").style.visibility = "visible";
    document.getElementById("seis").style.visibility = "visible";
    document.getElementById("siete").style.visibility = "visible";
    document.getElementById("ocho").style.visibility = "visible";
    document.getElementById("nueve").style.visibility = "visible";
    document.getElementById("diez").style.visibility = "visible";
    document.getElementById("once").style.visibility = "visible";
  }
}
