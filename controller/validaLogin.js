const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario == "user" && senha == "123") {
    localStorage.setItem('User-Logado', true);

    window.location.href = "../pages/index.html";
    console.log("Usuario");
  }
  if (usuario == "admin" && senha == "123456") {
    localStorage.setItem('User-Logado', false);
    
    window.location.href = "../pages/painel-admin.html";
    console.log("Admin");
  }
});
