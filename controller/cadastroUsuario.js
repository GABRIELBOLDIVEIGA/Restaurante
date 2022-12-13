import { usuarioService } from "../service/user-service.js";

const listaUser = async () => {
  var resposta = await usuarioService.listaUsuarios();
  console.table(resposta);
};

listaUser();

const nomeCompleto = document.getElementById("nomeCompleto");
const nomeUsuario = document.getElementById("nomeUsuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");

const btnCriarConta = document.getElementById("cadastrar");
btnCriarConta.addEventListener("click", function () {
  console.log(nomeCompleto.value, nomeUsuario.value, email.value, senha.value, confirmaSenha.value);

  usuarioService.adicionaUsuario(nomeCompleto.value, nomeUsuario.value, email.value, senha.value);
});
