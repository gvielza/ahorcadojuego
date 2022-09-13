let palabraActual;

function crearPalabraSecreta() {
  const palabra = palabraAleatoria();
  document.getElementById("uno").style.visibility = "visible";
  document.getElementById("dos").style.visibility = "visible";
  alert(palabra.length);
  dibujarGuiones(palabra.length);
  return palabra;
  }
function iniciarJuego() {
  var btn_iniciar = document.getElementById("btn_iniciar");
  btn_iniciar.style.display = "none";

  var juego = document.getElementById("juego");
  var hombre = document.getElementById("hombre");
  hombre.style.visibility = "hidden";
  juego.style.visibility = "visible";
  palabraActual=crearPalabraSecreta();
  alert(palabraActual);
  
}
//setInterval(iniciarJuego(),10000);

function letraPresionada(event){
  if (event.keyCode<65||event.keyCode>90) {
    alert("Debe seleccionar solo letras");
  }
  else{
    obtenerLetra(event.key)
    
  }
 
}
let contador=0;
let erradas=[];
function obtenerLetra(letra){
  
  alert(letra);
  for (let index = 0; index < palabraActual.length; index++) {

  if(letra===palabraActual[index]){
    dibujaLetra(letra,index);
    contador=0;
    return;
    
  }
 else{
    erradas.push(palabraActual[index]);
    dibujaHombre(erradas);
    alert(erradas)    
  }
 
  }

}
function dibujaHombre(err){

  if(err.length==1){
    document.getElementById("circle").style.visibility="visible";}
    if(err.length==2){
      document.getElementById("cuerpo").style.visibility="visible";}

}



//funcion que dibuja letra
function dibujaLetra(letra,index){
  if (index===1) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spandos").appendChild(text);
}if (index===0) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spanuno").appendChild(text);
}
if (index===2) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spantres").appendChild(text);
}
if (index===3) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spancuatro").appendChild(text);
}
if (index===4) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spancinco").appendChild(text);
}
if (index===5) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spanseis").appendChild(text);
}
if (index===6) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spansiete").appendChild(text);
}
if (index===7) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spanocho").appendChild(text);
}
if (index===8) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spannueve").appendChild(text);
}
if (index===9) {   
  var text=document.createTextNode(letra); 
  document.getElementById("spandiez").appendChild(text);
}
if (index===10) {   
  var text=document.createTextNode(letra); 
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
function reiniciar(){
location.reload();
}


//funcion que me dibuja los guiones
function dibujarGuiones( numero){

if(numero===3){
  document.getElementById("tres").style.visibility = "visible";
}if(numero===4){
  document.getElementById("tres").style.visibility = "visible";
  document.getElementById("cuatro").style.visibility = "visible";
}
if(numero===5){
  document.getElementById("tres").style.visibility = "visible";
  document.getElementById("cuatro").style.visibility = "visible";
  document.getElementById("cinco").style.visibility = "visible";
}
if(numero===6){
  document.getElementById("tres").style.visibility = "visible";
  document.getElementById("cuatro").style.visibility = "visible";
  document.getElementById("cinco").style.visibility = "visible";
  document.getElementById("seis").style.visibility = "visible";
}
if(numero===7){
  document.getElementById("tres").style.visibility = "visible";
  document.getElementById("cuatro").style.visibility = "visible";
  document.getElementById("cinco").style.visibility = "visible";
  document.getElementById("seis").style.visibility = "visible";
  document.getElementById("siete").style.visibility = "visible";
}
if(numero===8){
  document.getElementById("tres").style.visibility = "visible";
  document.getElementById("cuatro").style.visibility = "visible";
  document.getElementById("cinco").style.visibility = "visible";
  document.getElementById("seis").style.visibility = "visible";
  document.getElementById("siete").style.visibility = "visible";
  document.getElementById("ocho").style.visibility = "visible";
}
if(numero===9){
  document.getElementById("tres").style.visibility = "visible";
  document.getElementById("cuatro").style.visibility = "visible";
  document.getElementById("cinco").style.visibility = "visible";
  document.getElementById("seis").style.visibility = "visible";
  document.getElementById("siete").style.visibility = "visible";
  document.getElementById("ocho").style.visibility = "visible";
  document.getElementById("nueve").style.visibility = "visible";
}
if(numero===10){
  document.getElementById("tres").style.visibility = "visible";
  document.getElementById("cuatro").style.visibility = "visible";
  document.getElementById("cinco").style.visibility = "visible";
  document.getElementById("seis").style.visibility = "visible";
  document.getElementById("siete").style.visibility = "visible";
  document.getElementById("ocho").style.visibility = "visible";
  document.getElementById("nueve").style.visibility = "visible";
  document.getElementById("diez").style.visibility = "visible";
}
if(numero===11){
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


