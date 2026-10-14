
const botaoEntrar = document.querySelector("#botao-entrar");
const detalhes = document.querySelector("#detalhes");

botaoEntrar.addEventListener("click", () => {
    detalhes.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
