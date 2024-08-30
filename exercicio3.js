//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", 
//"Recuperação", ou "Reprovado" utilizando if-else if.



let grade = Number (prompt(`Digite sua nota.`))
if(grade <= 4){
    console.log("Reprovado")
}else if(grade === 5){
    console.log("Em recuperação.")
}else if(grade >= 6){
    console.log("Aprovado.")
}
