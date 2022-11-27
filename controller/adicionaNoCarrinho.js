import { produtoService } from "../service/produto-service.js";

const carrinho = document.getElementById("listaDeCompra");
export const adicionaNoCarrinho = async (idDoProduto) => {
  const produtoDetalhado = await produtoService.detalhaProduto(idDoProduto);
  // console.log(produtoDetalhado);

  render(produtoDetalhado);
  atualizaPreco();
};

function render(produtoDetalhado) {
  const conteudo = `
      <div>
        <p>${produtoDetalhado.nome}</p>
        <div>
          <img class="btnQuantidade" id="btnMenos" src="../assets/img/svg/minus.svg" />
          <input type="text" class="inputQuantidade" value="1" data-quantidade />
          <img class="btnQuantidade" id="btnMais" src="../assets/img/svg/plus.svg" />
        </div>
      </div>
      <p id="preco">R$ <span data-preco> ${produtoDetalhado.preco}</span></p>
  `;

  const li = document.createElement("li");
  li.setAttribute("data-idProduto", `${produtoDetalhado.id}`);
  li.innerHTML = conteudo;
  carrinho.appendChild(li);

  controleDeQuantidade(li);
}

function controleDeQuantidade(item) {
  const btnMais = item.querySelector("#btnMais");
  const btnMenos = item.querySelector("#btnMenos");

  btnMais.addEventListener("click", function () {
    const quantidadeDeItens = this.parentNode.querySelector("[data-quantidade]");

    quantidadeDeItens.value = parseInt(quantidadeDeItens.value) + 1;
    atualizaPreco();
  });

  btnMenos.addEventListener("click", function () {
    const quantidadeDeItens = this.parentNode.querySelector("[data-quantidade]");

    quantidadeDeItens.value = parseInt(quantidadeDeItens.value) - 1;

    if (quantidadeDeItens.value < 1) {
      this.closest("[data-idProduto]").remove();
    }

    atualizaPreco();
  });
}

const precoTotal = document.querySelector("[data-precoTotal]");
function atualizaPreco() {
  const produtosNoCarrinho = document.querySelectorAll("li");
  var soma = 0;

  produtosNoCarrinho.forEach((elemento) => {
    let quantidade = parseFloat(elemento.querySelector("[data-quantidade]").value);
    let preco = parseFloat(elemento.querySelector("[data-preco]").textContent);
    soma = quantidade * preco + soma;
  });

  precoTotal.textContent = soma.toFixed(2);
}
