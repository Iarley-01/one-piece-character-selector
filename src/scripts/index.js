const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    deselecionarBotao();
    
    deselecionarPersonagem();
    
    selecionaPersonagem(botao, indice);
  });
});

function deselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function deselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function selecionaPersonagem(botao,indice) {
    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
}
// botoes.addEventListener("click", () => {
//   
// });