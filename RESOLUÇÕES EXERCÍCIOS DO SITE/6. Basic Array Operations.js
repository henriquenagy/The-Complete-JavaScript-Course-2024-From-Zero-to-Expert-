'use strict'
const neighbours = ['mongagua', 'itanhaem', 'ilhaGrande']
console.log(neighbours)
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop()
console.log(neighbours)

/* //trocar pelo método includes né cabeção
for (let i = 0; i < neighbours.length; i++) {
  if (neighbours[i] != 'Germany') {
    console.log('Probably not a central european country :D')
  } else if (neighbours[i] === 'Germany') {
    console.log('You selected a European country')
  } else if (neighbours[i] === 'ilhaGrande') {
    neighbours
  }
}*/

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central european country :D')
}

/*//Outro método mais fácil para trocar o nome
const Changez = neighbours.indexOf('itanhaem')
if (Changez !== -1) {
  neighbours.splice(Changez, 1, 'Republic of Sweden')
} else {
  console.log('itanhaem não encontrado na matriz.')
}*/
neighbours[neighbours.indexOf('itanhaem')] = 'Republic of Sweden'

console.log(neighbours)
