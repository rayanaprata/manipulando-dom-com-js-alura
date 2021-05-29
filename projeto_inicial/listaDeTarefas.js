// Capturando o valor do input:
const criarTarefa = (evento) => {
  // O comportamento padrão do formulário é encaminhar o input pro servidor
  // Prevenindo o comportamento padrão:
  evento.preventDefault;
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;
  console.log(valor);
  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

// Escutando eventos
novaTarefa.addEventListener("click", criarTarefa);

// Precisamos de três coisas para utilizar um EventListener (escutador de eventos):
// 1. Tipo do evento;
// 2. Elemento que vai receber o evento;
// 3. O que vai acontecer quando o evento for disparado.
