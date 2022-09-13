const prompt = require(`prompt-sync`)()
	// Entrada de dados
	
		const A = parseInt(prompt('Digite o primeiro número: '))
		const B = parseInt(prompt('Digite o segundo número: '))
        const C = parseInt(prompt('Digite o terceiro número: '))
		
	// Processamento + Saída de dados
	
		if(A <= B && B <= C) 
			{
		console.log('\nEm ordem crescente: ', A,' ,',B,' ,',C,'.')
			}
		if(A <= C && C <= B)
			{
		console.log('\nEm ordem crescente: ',A,' ,',C,' ,',B,'.')
			}
		if(B <= A && A <= C)
			{
		console.log('\nEm ordem crescente: ',B,' ,',A,' ,',C,'.')
			}
		if(B <= C && C <= A)
			{
		console.log('\nEm ordem crescente: ',B,' ,',C,' ,',A,'.')	
			}
		if(C <= A && A <= B)
			{
		console.log('\nEm ordem crescente: ',C,' ,',A,' ,',B,'.')
			}
		if(C <= B && B <= A)
			{
		console.log('\nEm ordem crescente: ',C,' ,',B,' ,',A,'.')	
			}
		
	
