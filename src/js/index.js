/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html
        Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão

        Passo 3 - adicionar a classe ativo nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais
    Passo  - pegar o botão e esconder ele
*/

//console.log(document.querySelector('.btn-mostrar-projetos')); ele mostrou isso antes

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () => {
    //console.log('teste'); teste para o ver se o botão está funcionando
    mostrarMaisProjetos();

    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
