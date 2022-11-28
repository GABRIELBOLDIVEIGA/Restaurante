const listaProdutos = async () => {
  const resposta = await fetch("http://localhost:3000/produto");
  if (resposta.ok) {
    return await resposta.json();
  }
  throw new Error("Não foi possível listar os Produtos!");
};

const criaProduto = async (nome, descricao, url, preco, categoria) => {
  const resposta = await fetch("http://localhost:3000/produto", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      descricao: descricao,
      url: url,
      preco: preco,
      categoria: categoria
    }),
  });

  if (resposta.ok) {
    return resposta.body;
  }
  throw new Error("Não foi possível criar um Produto!");
};

const removeProduto = async (id) => {
  const resposta = await fetch(`http://localhost:3000/produto/${id}`, {
    method: "DELETE",
  });

  if (!resposta.ok) {
    throw new Error("Não foi possível remover este Produto!");
  }
};

const detalhaProduto = async (id) => {
  const resposta = await fetch(`http://localhost:3000/produto/${id}`);

  if (resposta.ok) {
    return resposta.json();
  }
  throw new Error("Não foi possível detalhar o Produto!");
};

const atualizaProduto = async (id, nome, descricao, url, preco, categoria) => {
  const resposta = await fetch(`http://localhost:3000/produto/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      descricao: descricao,
      url: url,
      preco: preco,
      categoria: categoria
    }),
  });
  
  if (resposta.ok) {
    return resposta.json();
  }
  throw new Error("Não foi possível atualizar o Produto!");
};

export const produtoService = {
  listaProdutos,
  criaProduto,
  removeProduto,
  detalhaProduto,
  atualizaProduto,
};
