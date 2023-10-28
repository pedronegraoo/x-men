const personagens = document.querySelectorAll(".personagem");

personagens.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    item.classList.add("selecionado");

    // Trocando a imagem grande conforme passar o mouse nos personagens
    alterarImagemPersonagemSelecionado(item);

    // Trocando o nome conforme passar o mouse nos personagem
    alterarNomePersonagemSelecionado(item);

    // Trocando a descrição conforme passar o mouse nos personagem
    alterarDescricaoPersonagemSelecionado(item);
  });
});

function alterarDescricaoPersonagemSelecionado(item) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = item.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(item) {
  const nomePersonagem = document.getElementById("nome-personagem");
  // Utilizando o atributo DATA
  nomePersonagem.innerText = item.getAttribute("data-name");
  // Pode ser feito das duas formas abaixo também
  // nomePersonagem.innerText = item.id;
  // nomePersonagem.textContent = item.id;
}

function alterarImagemPersonagemSelecionado(item) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  imagemPersonagemGrande.src = `./src/imagens/card-${item.id}.png`;
}
