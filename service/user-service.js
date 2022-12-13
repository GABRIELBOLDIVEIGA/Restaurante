const listaUsuarios = async () => {
  const resposta = await fetch("http://localhost:3000/usuario");
  if (resposta.ok) {
    return await resposta.json();
  }
  throw new Error("Não foi possível listar os Usuarios!");
};

const adicionaUsuario = async (nomeCompleto, nomeUser, email, senha) => {
  const resposta = await fetch("http://localhost:3000/usuario", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nomeCompleto: nomeCompleto,
      nomeUser: nomeUser,
      email: email,
      senha: senha,
      historico: [],
    }),
  });

  if (resposta.ok) {
    return resposta.body;
  }
  throw new Error("Não foi possível criar um Usuario!");
};

export const usuarioService = {
  listaUsuarios,
  adicionaUsuario,
};
