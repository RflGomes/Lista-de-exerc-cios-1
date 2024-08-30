//Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

const prompt = require("prompt-sync")();
function calcularFatorial(numero) {
 
  if (numero < 0) {
      return "Não existe fatorial números negativos.";
  }
    
  if (numero === 0) {
      return 1;
  }

  let fatorial = 1;
    
  for (let i = 1; i <= numero; i++) {
      fatorial *= i;
  }
  
  return fatorial;
}

const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (!isNaN(numero)) {
  const resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
} else {
  console.log("Por favor, digite um número válido.");
}