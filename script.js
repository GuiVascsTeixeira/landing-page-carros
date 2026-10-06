const botaoTema = document.getElementById("botao-tema");

// Muda o texto do botão de acordo com o tema atual
function atualizarBotao() {
  const escuro = document.body.classList.contains("escuro");
  botaoTema.textContent = escuro ? "Modo claro" : "Modo escuro";
}

// Quando a página abre, lembra a escolha feita da última vez
if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("escuro");
}
atualizarBotao();

// Ao clicar, liga ou desliga a classe "escuro" no body
botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  const escuro = document.body.classList.contains("escuro");
  localStorage.setItem("tema", escuro ? "escuro" : "claro");
  atualizarBotao();
});