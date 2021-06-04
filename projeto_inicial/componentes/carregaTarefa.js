//Responsável por exibir as tarefas na tela
import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";

export const carregaTarefa = () => {
  const lista = document.querySelector("[data-list]"); // método querySelect para buscar um seletor, o seletor data-atributtes

  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

  lista.innerHTML = " ";
  const dataUnicas = removeDatasRepetidas(tarefasCadastradas);
  ordenaDatas(dataUnicas);
  dataUnicas.forEach((dia) => {
    lista.appendChild(criaData(dia));
  });
};

// Curto circuito

// Durante o curso utilizamos o pipe || para criar uma avaliação de curto circuito.

// const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [ ]

// Com isso, dizíamos à aplicação que caso o localStorage estivesse com dados ela se comportaria de um modo, se ele estivesse vazio, ele iniciaria com um array vazio. As expressões lógicas são avaliadas da esquerda pra direita, logo, se a primeira atender o caso de sucesso, o segundo caso não é aplicado, e se o primeiro for avaliado como falso, caímos no segundo caso.

// true || false // true
// false || true // true
