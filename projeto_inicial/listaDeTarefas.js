(() => {
  // Capturando o valor do input:
  const criarTarefa = (evento) => {
    // O comportamento padrão do formulário é encaminhar o input pro servidor
    // Prevenindo o comportamento padrão:
    evento.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    // anexar um elemento dentro do outro
    lista.appendChild(tarefa);

    input.value = "";
  };

  const novaTarefa = document.querySelector("[data-form-button]");

  // Escutando eventos
  novaTarefa.addEventListener("click", criarTarefa);

  // Criação de um componente do botao para riscar as tarefas concluídas
  const BotaoConclui = () => {
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "concluir";

    botaoConclui.addEventListener("click", concluirTarefa);

    return botaoConclui;
  };

  const concluirTarefa = (evento) => {
    // Para que a formatação de tarefa concluída seja aplicada no comprimento total do elemento, precisamos colocar essa classe CSS no elemento pai do parágrafo, ou seja na li.

    // Através da variável botaoConclui capturamos qual elemento foi clicado, depois utilizamos a propriedade parentElement para subir um nó na árvore, por fim colocamos o método toggle que vai adicionar a classe done quando clicarmos no botão.

    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle("done");
  };

  // Componente começa com letra maiuscula
  const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");

    botaoDeleta.innerText = "deletar";
    botaoDeleta.addEventListener("click", deletarTarefa);

    return botaoDeleta;
  };

  const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    return botaoDeleta;
  };
})();

// Precisamos de três coisas para utilizar um EventListener (escutador de eventos):
// 1. Tipo do evento;
// 2. Elemento que vai receber o evento;
// 3. O que vai acontecer quando o evento for disparado.

// Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

// Existem outros métodos que podemos utilizar para manipular nós:

// insertBefore(pai, filho): Coloca um nó antes do outro.
// replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
// removeChild(elemento): Remove um nó da árvore.
