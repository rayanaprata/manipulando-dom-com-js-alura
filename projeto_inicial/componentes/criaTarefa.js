import { carregaTarefa } from "./carregaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";

// Capturando o valor do input:
export const handleNovoItem = (evento) => {
  // O comportamento padrão do formulário é encaminhar o input pro servidor
  // Prevenindo o comportamento padrão do formulário:
  evento.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const input = document.querySelector("[data-form-input]");
  const valor = input.value; // selecionar o valor do input, utilizando a propriedade value

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const horario = data.format("HH:mm");
  const dataFormatada = data.format("DD/MM/YYYY");

  const concluida = false;

  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida,
  };

  const tarefasAtualizadas = [...tarefas, dados];

  localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)); // JSON.stringify() - Retorna uma string JSON correspondente ao valor especificado

  input.value = "";
  carregaTarefa();
};

export const Tarefa = ({ valor, horario, concluida }, id) => {
  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${horario} * ${valor}</p>`; /// criar templates utilizando template string

  if (concluida) {
    tarefa.classList.add("done");
  }

  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui(carregaTarefa, id)); // utilizar appendChild para colocar um nó logo no final de um outro nó, colocar um elemento filho dentro do elemento pai
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

  return tarefa;
};
