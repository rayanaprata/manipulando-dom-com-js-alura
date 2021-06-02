import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

// Capturando o valor do input:
const handleNovoItem = (evento) => {
  // O comportamento padrão do formulário é encaminhar o input pro servidor
  // Prevenindo o comportamento padrão do formulário:
  evento.preventDefault();

  const lista = document.querySelector("[data-list]"); // método querySelect para buscar um seletor, o seletor data-atributtes
  const input = document.querySelector("[data-form-input]");
  const valor = input.value; // selecionar o valor do input, utilizando a propriedade value

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const dataFormatada = data.format("DD/MM/YYYY");

  const dados = {
    valor,
    dataFormatada,
  };

  const criaTarefa = criarTarefa(dados);

  // anexar um elemento dentro do outro
  lista.appendChild(criaTarefa);

  sessionStorage.setItem("tarefas", JSON.stringify(dados));

  input.value = "";
};

const criarTarefa = ({ valor, dataFormatada }) => {
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`; /// criar templates utilizando template string

  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui()); // utilizar appendChild para colocar um nó logo no final de um outro nó, colocar um elemento filho dentro do elemento pai
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
};

const novaTarefa = document.querySelector("[data-form-button]");

// Escutando eventos
novaTarefa.addEventListener("click", handleNovoItem); // trabalhamos com evento de click do botão

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

// Código final do curso JS na Web - Manipule o DOM com JavaScript:
// https://github.com/alura-cursos/1823_DOM/tree/projeto_final

// --------------------------------------------------------

// Date

// Os navegadores permitem que nós nos comuniquemos com eles através de uma interface, que possui uma lista de métodos de objetos que conseguimos acessar com JavaScript.

// Dentro desta lista vamos acessar um objeto chamado Date(), mas primeiro precisamos instanciar esse objeto.

// const data = new Date()
// \\ Wed Oct 14 2020 14:14:24 GMT-0300 (Brasilia Standard Time)

// ----------

// Podemos ver que acessamos várias informações da data. O objeto Date() possui vários métodos para lidar com datas. Por exemplo, se quisermos editar essa primeira informação para um formato que vai exibir a data separada por barra podemos usar o método toLocaleDateString:

// data.toLocaleDateString('pt-BR')
// \\ "10/14/2020"

// ----------

// Esse formato pode ser configurável: por exemplo, podemos criar um objeto que vai conter a chave que diz respeito à data e ao valor para definir como queremos exibir a data:

// const dataOptions = {
//    weekend: 'long',
//    year: 'numeric',
//    month:'long',
//    day: 'numeric'
// }

// ----------

// Agora basta chamar dataOptions como segundo parâmetro:

// data.toLocaleDateString('pt-BR', dataOptions)

// \\ 28 de agosto de 2020

// ----------

// E o horário? O navegador possui um método chamado toLocaleTimeString(), que mostra o horário do navegador e, assim como no método de data, passamos pt-br como parâmetro. Assim, a data é formatada para o padrão que usamos aqui no Brasil.

// data.toLocaleTimeString()
// \\ “9:04:54 AM”

// ----------

// O resultado é configurável assim como o de data, com o mesmo processo de criar um objeto com chave e valor, que depois passamos como parâmetro.

// const horarioOptions = {
//    hour12: false,
//    hour: 'numeric',
//    minute: '2-digit',
//    second: '2-digit',
//    timeZone: 'America/Sao_Paulo'
// }

// ----------

// Usando horarioOptions como argumento da função toLocaleTimeString, temos:

// data.toLocaleTimeString('pt-BR', horarioOptions)
// \\ “9:04:54”

// // ----------

// Podemos combinar todas essas opções utilizando o método toLocaleString(). Usando esses três pontos antes do objeto, estamos indicando que todas as chaves/valor do objeto vão ser passadas para esse novo objeto. Essa sintaxe chama-se spread operator.

// data.toLocaleString('pt-BR', {
//    ...dataOptions,
//    ...horarioOptions
// })
// \\ “28 de agosto de 2020 9:04:54”

// // ----------
// Se precisarmos usar essa formatação em vários lugares do código, podemos utilizar o objeto Intl.DateTimeFormat que é um construtor, ou seja, ele vai receber informações iniciais de como queremos que a data esteja formatada.

// const formataData = new Intl.DateTimeFormat('pt-BR', {
//    ...dataOptions,
//    ...horarioOptions
// })

// // ----------
// Por fim, chamando o método format, conseguimos formatar diferentes datas caso necessário.

// formataData.format(data)
// \\ “28 de agosto de 2020 9:04:54”

// // ----------

// Ficou claro que trabalhar com datas utilizando API do navegador traz vantagens e desvantagens, e depende do seu projeto aproveitar essa flexibilidade de customizações.

// --------------------

// O JS tem evoluído muito com os anos e estão sendo adicionadas cada vez mais features à linguagem. Uma dessas features é a de desestruturação de arrays e de objetos.

// Essa não é apenas uma nova forma de escrever código mas sim uma maneira de interagir com elementos que nos permite interagir de forma complexa com eles sem precisar escrever muito código.

// Junto com a Desestruturação veremos também como funciona o spread operator e como ele facilita o manuseio de arrays e objetos
