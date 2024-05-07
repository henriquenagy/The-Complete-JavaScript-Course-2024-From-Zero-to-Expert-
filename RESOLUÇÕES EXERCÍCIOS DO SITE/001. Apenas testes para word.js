const books = [
  { title: '1. Algorithms', edition: 4, pages: 976 },
  { title: '2. Second booke', edition: 2, pages: 640 }
]
//Criar um map pegando dados do array com objetos books primeira posição
const firstBookMap = new Map(Object.entries(books[0]))
console.log(firstBookMap) //Map(3) { 'title' => '1. Algorithms', 'edition' => 4, 'pages' => 976 }

//Iterar e pegar somente os values que são números e retornar o key
for (const [key, value] of firstBookMap)
  if (typeof value === 'number') console.log(key) //edition  pages

//Novo map para teste
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin']
])
//Checar se tem author usando && e IF
bookMap.has('author') === true &&
  console.log('The author of the book is known - método AND &&')
if (bookMap.has('author'))
  console.log('The author of the book is known - método IF')
