const prompt = require('prompt-sync')()	

const idade = parseInt(prompt('Insira sua idade: '))

//Processamento + Saída de dados

if (idade >= 10 && idade <= 14){
    console.log('\nVocê está na categoria Infantil.')
}
if ( idade >= 15 && idade <= 17){
    console.log('Você está na categoria Juvenil.')
}
if ( idade >= 18 && idade <= 25){
    console.log('Você está na categoria Adulto.')
}
if (idade < 10 || idade > 25){
    console.log('Opção inválida.')
}