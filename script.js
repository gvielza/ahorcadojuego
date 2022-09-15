let palabraActual;
let errados = 0;
let aciertos = 0;
let contador = 0;
let letrascorrectas = [];
let letrasincorrectas = [];

function reiniciarJuego() {
  document.getElementById("spanuno").innerHTML = "";
  document.getElementById("spandos").innerHTML = "";
  document.getElementById("spantres").innerHTML = "";
  document.getElementById("spancuatro").innerHTML = "";
  document.getElementById("spancinco").innerHTML = "";
  document.getElementById("spanseis").innerHTML = "";
  document.getElementById("spansiete").innerHTML = "";
  document.getElementById("spanocho").innerHTML = "";
  document.getElementById("spannueve").innerHTML = "";
  document.getElementById("spandiez").innerHTML = "";
  document.getElementById("spanonce").innerHTML = "";

  document.getElementById("letraserradas").innerHTML = "";

  document.getElementById("ganaste").style.visibility = "hidden";
  document.getElementById("ganastes").style.visibility = "hidden";
  document.getElementById("perdiste").style.visibility = "hidden";
  document.getElementById("perdistes").style.visibility = "hidden";
  document.getElementById("circle").style.visibility = "hidden";
  document.getElementById("cuerpo").style.visibility = "hidden";
  document.getElementById("soga").style.visibility = "hidden";
  document.getElementById("piernaizq").style.visibility = "hidden";
  document.getElementById("piernader").style.visibility = "hidden";
  document.getElementById("lateral").style.visibility = "hidden";
  document.getElementById("arriba").style.visibility = "hidden";
  document.getElementById("piso").style.visibility = "hidden";
  document.getElementById("brazos").style.visibility = "hidden";

  letrascorrectas = [];
  letrasincorrectas = [];

  errados = 0;
  aciertos = 0;
  dibujarGuiones(0);

  iniciarJuego();
}

function crearPalabraSecreta() {
  const palabra = palabraAleatoria();
  document.getElementById("uno").style.visibility = "visible";
  document.getElementById("dos").style.visibility = "visible";

  dibujarGuiones(palabra.length);
  return palabra;
}
function iniciarJuego() {
  console.log(palabras)
  var btn_iniciar = document.getElementById("btn_iniciar");
  btn_iniciar.style.display = "none";
  btn_agregar.style.display = "none";

  var juego = document.getElementById("juego");
  var hombre = document.getElementById("hombre");
  hombre.style.visibility = "hidden";
  juego.style.visibility = "visible";
  palabraActual = crearPalabraSecreta();
  console.log(palabraActual);
}

function letraPresionada(event) {
  if (event.keyCode < 65 || event.keyCode > 90) {
    alert("Debe seleccionar solo letras");
    return;
  } else {
    obtenerLetra(event.key);
  }
}

function obtenerLetra(letra) {
  if (palabraActual.includes(letra)) {
    for (let index = 0; index < palabraActual.length; index++) {
      if (letra === palabraActual[index]) {
        dibujaLetra(letra, index);

        contador++;
        letrascorrectas.push(letra);
        console.log(letrascorrectas);
      }
    }
  } else {
    errados++;
    contador++;
    dibujaHombre(errados);
    let letraAct = document.createTextNode(letra);

    document.getElementById("letraserradas").appendChild(letraAct);

    letrasincorrectas.push(letra);
  }

  if (errados === 8) {
    setTimeout(perder, 500);
  }
}

function ganaste() {
  document.getElementById("ganaste").style.visibility = "visible";
  document.getElementById("ganastes").style.visibility = "visible";
}
function perder() {
  document.getElementById("perdiste").style.visibility = "visible";
  document.getElementById("perdistes").style.visibility = "visible";
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
  if (index === 1 && document.getElementById("spandos").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spandos").appendChild(text);
    aciertos++;
  }
  if (index === 0 && document.getElementById("spanuno").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spanuno").appendChild(text);
    aciertos++;
  }
  if (index === 2 && document.getElementById("spantres").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spantres").appendChild(text);
    aciertos++;
  }
  if (index === 3 && document.getElementById("spancuatro").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spancuatro").appendChild(text);
    aciertos++;
  }
  if (index === 4 && document.getElementById("spancinco").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spancinco").appendChild(text);
    aciertos++;
  }
  if (index === 5 && document.getElementById("spanseis").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spanseis").appendChild(text);
    aciertos++;
  }
  if (index === 6 && document.getElementById("spansiete").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spansiete").appendChild(text);
    aciertos++;
  }
  if (index === 7 && document.getElementById("spanocho").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spanocho").appendChild(text);
    aciertos++;
  }
  if (index === 8 && document.getElementById("spannueve").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spannueve").appendChild(text);
    aciertos++;
  }
  if (index === 9 && document.getElementById("spandiez").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spandiez").appendChild(text);
    aciertos++;
  }
  if (index === 10 && document.getElementById("spanonce").innerHTML === "") {
    var text = document.createTextNode(letra);
    document.getElementById("spanonce").appendChild(text);
    aciertos++;
  }
  if (aciertos === palabraActual.length) {
    setTimeout(ganaste, 500);
  }
}

let ctdadPalabras = 10;
  let palabras = [
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
//funcion devuelve palabra aleatoria
function palabraAleatoria() {
  
  const indice = Math.round(Math.random() * (ctdadPalabras - 1 - 0) + 0);
  return palabras[indice];
}

function agregar(){
  document.getElementById("btn_iniciar").style.visibility="hidden";
  document.getElementById("btn_agregar").style.visibility="hidden";
  document.getElementById("palabranueva").style.visibility="visible";
}
//funcion que agrega una palabra
function agregarPalabra(){
let texto=document.getElementById("palabraagregada").value;
palabras.push(texto);
ctdadPalabras++;
console.log(palabras);
localStorage.setItem("palabras",JSON.stringify(palabras));
localStorage.setItem("ctdadPalabras",JSON.stringify(ctdadPalabras));

location.reload();
}
//funcion para reiniciar
function reiniciar() {
  location.reload();
}

//funcion que me dibuja los guiones
function dibujarGuiones(numero) {
  if (numero === 0) {
    document.getElementById("uno").style.visibility = "hidden";
    document.getElementById("dos").style.visibility = "hideen";
    document.getElementById("tres").style.visibility = "hidden";
    document.getElementById("cuatro").style.visibility = "hidden";
    document.getElementById("cinco").style.visibility = "hidden";
    document.getElementById("seis").style.visibility = "hidden";
    document.getElementById("siete").style.visibility = "hidden";
    document.getElementById("ocho").style.visibility = "hidden";
    document.getElementById("nueve").style.visibility = "hidden";
    document.getElementById("diez").style.visibility = "hidden";
  }

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
