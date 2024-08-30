//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

const prompt = require("prompt-sync")();
let sum = 0;
let cont = 0;
let number  = 1;
while (number != 0) {
  number = parseFloat(prompt("Digite números decimais e para encerrar o programa digite 0: "));
  if (number != 0) {
    sum += number;
    cont++;
  }
}
let media = sum / cont;
console.log(`A média dos números digitados é: ${media}`);