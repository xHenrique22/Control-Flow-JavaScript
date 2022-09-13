const prompt = require('prompt-sync')()

	//Entrada de dados
	
 
    const numero = parseInt(prompt('Insira um número positivo: '))
    

    // Processamento + Saída de dados
    if(numero % 2 === 0){
        
        console.log('O número inserido é par e a sua raiz quadrada é ',Math.sqrt(numero),'')	
    }
    if( numero % 2 != 0){
        

        console.log('O número inserido é ímpar e o mesmo elevado ao quadrado é ',Math.pow(numero, 2),'')
    }
