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
const entries = []
for (let inside of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([inside])
}
console.log(entries)
//Saída: [ [ 'rating' ],[ 'ratingsCount' ],[ 'reviewsCount' ],[ 'fiveStarRatingCount' ],[ 'oneStarRatingCount' ]]
