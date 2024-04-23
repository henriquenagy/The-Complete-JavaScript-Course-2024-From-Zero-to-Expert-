const books = [
  { title: 'livro 1', keywords: ['teste do primeiro'] },
  { title: 'livro 2', keywords: ['teste do Segundão'] },
  { title: 'livro 3', keywords: ['teste do third'] },
  { title: 'livro 4', keywords: ['teste do quartos'] }
]
function getFirstKeyword(pegar) {
  return pegar?.keywords?.[0]
}
// Exemplo de uso com o array books:
console.log(getFirstKeyword(books[0])) // Saída: teste do primeiro
console.log(getFirstKeyword(books[1])) // Saída: teste do Segundão
console.log(getFirstKeyword(books[6])) // Saída: undefined
