const respostaCerta = document.getElementById("resposta-certa")

const explicacao = document.getElementById("explicacao")

respostaCerta.addEventListener("click", (event) => {
    explicacao.innerHTML = "Correto!"
})

const respostaErrada = document.querySelectorAll(".resposta-errada")
console.log(respostaErrada);
