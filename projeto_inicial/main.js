import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

// Capturando o valor do input:
const criarTarefa = (evento) => {
  // O comportamento padrão do formulário é encaminhar o input pro servidor
  // Prevenindo o comportamento padrão do formulário:
  evento.preventDefault();

  const lista = document.querySelector("[data-list]"); // método querySelect para buscar um seletor, o seletor data-atributtes
  const input = document.querySelector("[data-form-input]");
  const valor = input.value; // selecionar o valor do input, utilizando a propriedade value

  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${valor}</p>`; /// criar templates utilizando template string

  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui()); // utilizar appendChild para colocar um nó logo no final de um outro nó, colocar um elemento filho dentro do elemento pai
  tarefa.appendChild(BotaoDeleta());

  // anexar um elemento dentro do outro
  lista.appendChild(tarefa);

  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

// Escutando eventos
novaTarefa.addEventListener("click", criarTarefa); // trabalhamos com evento de click do botão

// Precisamos de três coisas para utilizar um EventListener (escutador de eventos):
// 1. Tipo do evento;
// 2. Elemento que vai receber o evento;
// 3. O que vai acontecer quando o evento for disparado.

// ----------------------------

// Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

// Existem outros métodos que podemos utilizar para manipular nós:

// insertBefore(pai, filho): Coloca um nó antes do outro.
// replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
// removeChild(elemento): Remove um nó da árvore.

// ----------------------------

// Quais as estratégias que utilizamos para aumentar a manutenção e legibilidade do código da nossa aplicação toda?

// Criar uma pasta para organizar os códigos, dar nomes que fazem sentido tanto para os arquivos quanto para as funções e componentes, utilizar import/export para criar comunicação entre os arquivos e garantir encapsulamento.

// Exatamente! Todos essas alternativas foram feitas durante o desenvolvimento para garantir o futuro da nossa aplicação. Lembre-se, escrevemos códigos para outras pessoas.

// ----------------------------

// Código do curso:
// https://github.com/alura-cursos/1823_DOM/tree/projeto_final
