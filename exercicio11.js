//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

const prompt = require("prompt-sync")();
let number = 0;
let sum = 0;

for(let i = 1;i<=5;i++){
    number = Number(prompt(`Digite o ${i}° número: `));
    sum += number;
}
console.log(sum);