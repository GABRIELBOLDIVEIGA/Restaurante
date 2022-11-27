import { produtoService } from "../service/produto-service.js";

const carrinho = document.getElementById("listaDeCompra");
export const adicionaNoCarrinho = async (idDoProduto) => {
  const produtoDetalhado = await produtoService.detalhaProduto(idDoProduto);
  // console.log(produtoDetalhado);
  const itensNoCarrinho = document.querySelectorAll("[data-idProduto]");
  console.log(itensNoCarrinho)

  itensNoCarrinho.forEach( (e) => {
    console.log(e)
  })

 
  const conteudo = `
      <div>
        <p>${produtoDetalhado.nome}</p>
        <div>
          <img class="btnQuantidade" id="btnMenos" src="../assets/img/svg/minus.svg" />
          <input type="text" class="inputQuantidade" value="00" />
          <img class="btnQuantidade" id="btnMais" src="../assets/img/svg/plus.svg" />
        </div>
      </div>
      <p id="preco">R$ <span>${produtoDetalhado.preco}</span></p>
  `;

  const li = document.createElement("li");
  li.setAttribute("data-idProduto", `${produtoDetalhado.id}`);
  li.innerHTML = conteudo;
  carrinho.appendChild(li);
};
