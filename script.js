var contador = document.getElementById("contador");
var botaoDiminuir = document.getElementById("decrease");
var botaoResetar = document.getElementById("reset");
var botaoAumentar = document.getElementById("increase");
var contadorCliques = 0;

botaoAumentar.addEventListener("click", function () {
  contadorCliques++;
  contador.textContent = contadorCliques;
});

botaoDiminuir.addEventListener("click", function () {
  contadorCliques--;
  contador.textContent = contadorCliques;
});

botaoResetar.addEventListener("click", function () {
  contadorCliques = 0;
  contador.textContent = contadorCliques;
});
