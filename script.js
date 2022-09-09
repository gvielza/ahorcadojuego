function dibujarlineas() {
  const palabra = palabraAleatoria();

  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(palabra);
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("uno");
  document.body.insertBefore(newDiv, currentDiv);
  var uno = document.getElementsByName("uno");
  uno.setAttribute("visibility","hidden");
  
}
function iniciarJuego(){
  var x = document.getElementById("btn_iniciar");
   x.style.display = "none";
   
   var y = document.getElementById("juego");
   y.style.visibility="visible"
  
}
setInterval(iniciarJuego(),10000);






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
