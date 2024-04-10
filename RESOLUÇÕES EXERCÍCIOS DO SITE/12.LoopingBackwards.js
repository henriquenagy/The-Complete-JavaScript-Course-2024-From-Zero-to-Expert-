'use stricts'
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
]
//Método usando for of
for (let country of listOfNeighbours) {
  for (let innerArray of country) {
    console.log(`Neighbour: ${innerArray}`)
  }
}
//Método usando for normal
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
