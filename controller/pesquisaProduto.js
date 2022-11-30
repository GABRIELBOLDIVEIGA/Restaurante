import { produtoService } from "../service/produto-service.js";
import { criaCard } from "/controller/listaProdutos.js";

const secProdutos = document.querySelector(".produtos");

const filtro = document.getElementById("filtro-pesquisa");
filtro.addEventListener("keyup", function () {
  while (secProdutos.firstChild) {
    secProdutos.removeChild(secProdutos.firstChild);
  }

  const termoDeBusca = this.value;
  busca(termoDeBusca);
});

const opcao = document.querySelectorAll("[data-opcao]");
opcao.forEach((element) => {
  element.addEventListener("click", function () {
    while (secProdutos.firstChild) {
      secProdutos.removeChild(secProdutos.firstChild);
    }
    const termoDeBusca = this.value;
    busca(termoDeBusca);
  });
});

const busca = async (termoDeBusca) => {
  try {
    const resposta = await produtoService.pesquisaProduto(termoDeBusca);

    resposta.forEach((element) => {
      secProdutos.appendChild(criaCard(element.nome, element.descricao, element.url, element.preco, element.id));
    });
  } catch (error) {
    console.log(error);
  }
};
