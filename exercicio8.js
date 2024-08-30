//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();
function verificarValoresIguais(valor1, valor2) {
    if (valor1 === valor2) {
        console.log("Os valores são iguais e foram ignorados.")
        return true;
    }
    return false;
}

function ordenarValores() {
    let continuar = true;
    
    while (continuar) {
       
        let valor1 = parseFloat(prompt("Digite o primeiro valor:"))        
        let valor2 = parseFloat(prompt("Digite o segundo valor:"))        
       
        if (verificarValoresIguais(valor1, valor2)) {            
            console.log("Tente novamente com valores diferentes.")
            continue;
        }
           
        if (valor1 < valor2) {
            console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
        } else {
            console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
        }   
       
        continuar = false;
    }
}
ordenarValores();