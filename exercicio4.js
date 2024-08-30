//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require ('prompt-sync')()
let interactivity = function () {
    console.log("ESCOLHA O IDIOMA");
    console.log("  1 - Português  ");
    console.log("  2 - Inglês  ");
    console.log("  3 - Espanhol  ");
};
  
  let option = -1; 
  
  while (option !== 0) {
    interactivity();
    option = Number(prompt("Escolha uma opção: ")); 
    switch (option) {
      case 1:
        console.log("Você escolheu português");
        break;
      case 2:
        console.log("Você escolheu inglês");
        break;
      case 3:
        console.log("Você escolheu espanhol");
        break;
      case 0:
        console.log("Saindo do menu...");
        break;
      default:
        console.log("Opção inválida");
        break;
    }
  }