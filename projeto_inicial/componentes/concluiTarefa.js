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

export default BotaoConclui;

// Módulos são pequenas parte do código que juntos formam um todo, transformando o componente utilizando a sintaxe: export default BotaoConclui
