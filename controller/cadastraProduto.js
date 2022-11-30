import { produtoService } from "../service/produto-service.js";

const opcao = document.querySelectorAll("[data-opcao]");
opcao.forEach((element) => {
  element.addEventListener("click", function () {
    const categoria = this.value;
  });
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const url = document.getElementById("url").value;
  const preco = document.getElementById("preco").value;

  produtoService.criaProduto(nome, descricao, url, preco, categoria);
  window.location.href = "#";
});
