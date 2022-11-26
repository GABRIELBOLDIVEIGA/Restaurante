import { produtoService } from "../service/produto-service.js";

function criaCard(nome, descricao, url, preco, id) {
  const novoCard = document.createElement("div");
  const conteudo = `
  <div class="card-produto">
    <div class="separaTextoDaImg">
      <div class="texto-produto">
        <h2 class="titulo-produto">${nome}</h2>
        <p class="descricao-produto">${descricao}</p>
      </div>
      <img class="img-produto" src="${url}" alt="imagem do produto" />
    </div>

    <div class="div-preco">
      <p class="texto-preco">a partir de <span class="preco-produto">R$ ${preco}</span></p>
      <div class="btn-adiciona-produto">
        <img class="svg-adiciona" src="../assets/img/svg/+.svg" data-id="${id}" />
      </div>
    </div>
  </div>
  `;
  novoCard.innerHTML = conteudo;
  return novoCard;
}

const secProdutos = document.querySelector(".produtos");

const render = async () => {
  try {
    const listaDeProdutos = await produtoService.listaProdutos();

    listaDeProdutos.forEach((elemento) => {
      secProdutos.appendChild(criaCard(elemento.nome, elemento.descricao, elemento.url, elemento.preco, elemento.id));
    });

    const botaoAdicionarProduto = document.querySelectorAll("[data-id]");
    botaoAdicionarProduto.forEach((elemento) => {
      elemento.addEventListener("click", function () {
        const idDoProduto = this.getAttribute("data-id");
        // console.log(idDoProduto);

        retornaProdutoDetalhado(idDoProduto);
      });
    });
  } catch {
    console.log(error);
  }
};

render();

const retornaProdutoDetalhado = async (idDoProduto) => {
  const produtoDetalhado = await produtoService.detalhaProduto(idDoProduto);
  console.log(produtoDetalhado);

  return produtoDetalhado;
};
