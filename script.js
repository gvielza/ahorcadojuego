function crearPalabraSecreta() {
  const palabra = palabraAleatoria();
  document.getElementById("uno").style.visibility = "visible";
  document.getElementById("dos").style.visibility = "visible";
  alert(palabra.length);
  dibujarGuiones(palabra.length);
  }
function iniciarJuego() {
  var btn_iniciar = document.getElementById("btn_iniciar");
  btn_iniciar.style.display = "none";

  var juego = document.getElementById("juego");
  var hombre = document.getElementById("hombre");
  hombre.style.visibility = "hidden";
  juego.style.visibility = "visible";
  crearPalabraSecreta();
  
}
//setInterval(iniciarJuego(),10000);

function letraPresionada(event){
  if (event.keyCode<65||event.keyCode>90) {
    alert("mala ele");
  }
  else{
    dibujaLetra(event.key)
  }
 
}

function dibujaLetra(letra){
  alert(letra);

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


