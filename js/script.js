
const botaoEntrar = document.querySelector("#botao-entrar");
const detalhes = document.querySelector("#detalhes");

botaoEntrar.addEventListener("click", () => {
    detalhes.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
const musica = document.querySelector("#musica-convite");
botaoEntrar.addEventListener("click", () => {
    musica.play().catch((erro) => {
        console.log("Não foi possível iniciar a música:", erro);
    });
});
