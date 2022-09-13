const prompt = require(`prompt-sync`)()

const A = parseInt(prompt(`Insira o primeiro número inteiro: `))

const B = parseInt(prompt(`Insira o segundo número inteiro: `))

const C = parseInt(prompt(`Insira o terceiro número inteiro: `))

let Maior = Number

if(A >= B){
    Maior = A
}
else{
    Maior = B
}
if(Maior <= C){
    Maior = C
}
console.log(`\nO maior número digitado foi: ${Maior}`)