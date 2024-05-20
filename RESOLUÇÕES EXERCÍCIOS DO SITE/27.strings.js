'use strict'
const books = [
  {
    title: '1. Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering'
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: '2. Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)'
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering'
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: "3. Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering'
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: '4. Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering'
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: '5. Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: '6. The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: '7. Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering'
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: '8. Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
]

console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[8]
)

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing'
console.log(quote.indexOf('chess'))

//Meu code enorme, mas não precisava de tudo isso. Chequei todos os nomes
function isContributor(name) {
  if (Array.isArray(name)) {
    name.forEach(inside => {
      console.log(`The name ${inside} is ${inside.includes('Wayne')}`)
    })
  } else {
    console.log(`The name ${name} is ${name.includes('Wayne')}`)
  }
}
for (const book of books) {
  isContributor(book.author)
}

//Usando includes
function isContributor(name) {
  return name.includes('Contributor')
}
//Usando o lastIndex
function isContributor(name) {
  return name.lastIndexOf('Contributor') !== -1
}
console.log(isContributor('Julie Sussman (Contributor)'))
console.log(isContributor('(Robert Sedgewick)'))
//16.1 Nome em caixa alta
function normalizeAuthorName(autores) {
  const remover = autores.replace('(Contributor)', '').trim().toLowerCase()
  const nomezao = remover.split(' ')
  const namesMaior = []
  for (const n of nomezao) {
    namesMaior.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesMaior.join(' '))
}
normalizeAuthorName('  JuliE sussMan (Contributor)')
//16.2 Usando o books title para trocar de nome
const newBookTitle = books[1].title.replace('Programs', 'Software')
console.log(newBookTitle)

//16.3 Checando se contain algum texto no title Ñ DEU MUITO CERTO
function logBookTheme(titulao) {
  titulao = titulao.toLowerCase()
  if (titulao.startsWith('computer')) {
    console.log(`[${titulao}]: This book is about computers`)
  } else if (titulao.includes('algorithms') && titulao.includes('structures')) {
    console.log(
      `[${titulao}]: This book is about algorithms and data structures`
    )
  } else if (
    (titulao.endsWith('system') || titulao.endsWith('systems')) &&
    !titulao.includes('operating')
  ) {
    console.log(
      `[${titulao}]: This book is about some systems, but definitely not about operating systems`
    )
  }
}
for (const getTItle of books) logBookTheme(getTItle.title)

/*
//17.1
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics'
//const arrumardo = bookCategories.replace(/;/g, '\n')
function logBookCategories(strin) {
  const arrums = strin.split(';')
  for (const eachitens of arrums) console.log(eachitens)
}
logBookCategories(bookCategories)*/

//17.2 criar novo array sem repetidos e tudo separado por ; numa coisa só
function getKeywordsAsString(ArrBooks) {
  const paraArrumar = []
  console.log(paraArrumar)
  for (const keyOfBooks of ArrBooks) paraArrumar.push(...keyOfBooks.keywords)
  console.log(paraArrumar)
  const uniques = [...new Set(paraArrumar)]
  console.log(uniques)
  return console.log(uniques.join(';'))
}
getKeywordsAsString(books)

//17.3
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706]
]

function logBookChapters(arrsChpats) {}

logBookChapters(bookChapters)
