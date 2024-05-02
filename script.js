const formAdicionarTarefa = document.getElementById('form-adicionar-tarefa');
const tabelaTarefas = document.getElementById('tabela-tarefas');

formAdicionarTarefa.addEventListener('submit', function(event) {
    event.preventDefault();

    const tituloTarefa = document.getElementById('titulo-tarefa').value;
    const descricaoTarefa = document.getElementById('descricao-tarefa').value;

    adicionarTarefa(tituloTarefa, descricaoTarefa);

    formAdicionarTarefa.reset();
});

function adicionarTarefa(titulo, descricao) {
    const linha = document.createElement('tr');
    const celulaTitulo = document.createElement('td');
    const celulaDescricao = document.createElement('td');
    const celulaAcoes = document.createElement('td');
    const botaoExcluir = document.createElement('button');

    celulaTitulo.textContent = titulo;
    celulaDescricao.textContent = descricao;
    botaoExcluir.textContent = 'Excluir';

    botaoExcluir.addEventListener('click', function() {
        removerTarefa(linha);
    });

    celulaAcoes.appendChild(botaoExcluir);

    linha.appendChild(celulaTitulo);
    linha.appendChild(celulaDescricao);
    linha.appendChild(celulaAcoes);

    tabelaTarefas.getElementsByTagName('tbody')[0].appendChild(linha);
}

function removerTarefa(linha) {
    tabelaTarefas.getElementsByTagName('tbody')[0].removeChild(linha);
}
