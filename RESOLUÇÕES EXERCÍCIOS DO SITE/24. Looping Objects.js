'use strict'
const books = [
  {
    title: '1. Algorithms',
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    }
  },
  {
    title: '2. Structure and Interpretation of Computer Programs',
    thirdParty: { goodreads: { rating: 4.36, ratingsCount: 14 } }
  }
]
const NovoArrayTeste = []
for (let inside of Object.keys(books[0].thirdParty.goodreads)) {
  NovoArrayTeste.push([inside])
}
console.log(NovoArrayTeste)
//Saída: [ [ 'rating' ],[ 'ratingsCount' ],[ 'reviewsCount' ],[ 'fiveStarRatingCount' ],[ 'oneStarRatingCount' ]]

//VERSÃO 1: Usando o NovoArrayTeste como base para criar esse outro
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  NovoArrayTeste[index].push(value)
}
console.log(NovoArrayTeste)

//VERSÃO 2: Usando for of com object entries
let testeNumber2 = []
for (let [posicao, dentro] of Object.entries(books[0].thirdParty.goodreads))
  testeNumber2.push([posicao, dentro])
console.log(testeNumber2)

//VERSÃO 3: Usando somente object entries
const teste2 = Object.entries(books[0].thirdParty.goodreads)
console.log(teste2)
