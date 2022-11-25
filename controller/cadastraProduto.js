import { produtoService } from "../service/produto-service.js";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const url = document.getElementById("url").value;
  const preco = document.getElementById("preco").value;

  console.log(nome, descricao, preco, url)
  produtoService.criaProduto(nome, descricao, url, preco);
});
