const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario == "user" && senha == "123") {
    console.log("Usuario");
    window.location.href = "#";
  }
  if (usuario == "admin" && senha == "123456") {
    console.log("Admin");
    window.location.href = "#";
  }

});
