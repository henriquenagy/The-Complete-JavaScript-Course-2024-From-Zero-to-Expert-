'use strict'
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

/*Quando você chama fruitProcessor(5, 0);, a função fruitProcessor é executada com os argumentos 5 e 0.
Dentro da função, a string juice é criada usando os valores dos parâmetros apples e oranges.
Em seguida, a instrução return juice; é executada. Isso faz com que a função retorne o valor da string juice.
O valor retornado pela função ("Suco com 5 maçãs e 0 laranjas.") é armazenado na variável appleJuice.
Por fim, console.log(appleJuice); exibe o valor de appleJuice no console, que é o resultado da função fruitProcessor.
O mesmo processo acontece quando você chama fruitProcessor(2, 4);. Nesse caso, o valor retornado pela função é "Suco com 2 maçãs e 4 laranjas.", que é armazenado na variável appleOrangeJuice, e então exibido no console usando console.log(appleOrangeJuice);.

Portanto, const appleJuice = fruitProcessor(5, 0); executa a função e armazena o resultado, enquanto console.log(appleJuice); mostra o resultado da função que está armazenado em appleJuice.*/
