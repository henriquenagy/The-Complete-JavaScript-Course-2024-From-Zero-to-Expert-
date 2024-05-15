const str = 'maçã,banana,uva'
const fruits = str.split(',') // ["maçã", "banana", "uva"]

// Como acessar itens específicos no array resultante:
// Para acessar o terceiro item (índice 2):
const terceiroItem = fruits[2] // "uva"

// Para acessar o décimo item (índice 9), primeiro verifique se ele existe:
if (fruits.length > 9) {
  const decimoItem = fruits[9]
  console.log(decimoItem)
} else {
  console.log('Índice 9 não existe no array.')
}

// Para deixar uma letra em caixa alta em uma posição específica de um item:
const palavra = 'banana'
const posicao = 2 // A segunda letra (índice 1) será convertida para caixa alta
const letraEmCaixaAlta =
  palavra.substring(0, posicao) +
  palavra[posicao].toUpperCase() +
  palavra.substring(posicao + 1)
console.log(letraEmCaixaAlta) // "baNana"

// Outras funcionalidades adicionais do método split():

// Limitando o número de divisões:
const str2 = 'maçã,banana,uva,morango,abacaxi'
const fruits2 = str2.split(',', 3) // ["maçã", "banana", "uva"]
console.log(fruits2)

// Dividindo com expressões regulares:
const str3 = 'maçã-|-banana-|-uva'
const fruits3 = str3.split(/-\\|-/) // ["maçã", "banana", "uva"]
console.log(fruits3)
