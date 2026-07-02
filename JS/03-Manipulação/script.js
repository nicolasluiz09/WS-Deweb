const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

botao.addEventListener("click", function() {
    titulo.textContent = "Título alterado";
    titulo.style.color = "navy";

    texto.textContent = "Texto alterado";
    texto.style.backgroundColor = "coral";
    texto.style.color = "white";
})