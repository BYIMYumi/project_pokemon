const botaoAlterarTema = document.getElementById ("botao_alterar_tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem_botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else { 

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }   
});
