import { produtoService } from "../service/produto-service.js";
import { render } from "../controller/listaProdutos.js";

const secProdutos = document.querySelector(".produtos");

const filtro = document.getElementById("filtro-pesquisa");
filtro.addEventListener("keyup", function () {
  while (secProdutos.firstChild) {
    secProdutos.removeChild(secProdutos.firstChild);
  }

  const termoDeBusca = produtoService.pesquisaProduto(this.value);

  render(termoDeBusca);
});

const opcao = document.querySelectorAll("[data-opcao]");
opcao.forEach((element) => {
  element.addEventListener("click", function () {
    while (secProdutos.firstChild) {
      secProdutos.removeChild(secProdutos.firstChild);
    }

    const termoDeBusca = produtoService.pesquisaProduto(this.value);

    render(termoDeBusca);
  });
});
