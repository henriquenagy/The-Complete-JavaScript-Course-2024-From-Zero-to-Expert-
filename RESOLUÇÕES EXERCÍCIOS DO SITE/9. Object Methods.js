'use strict'
const myCountry = {
  country: 'Boston',
  capital: 'Massachusetts',
  language: 'English',
  population: 6,
  neighbours: ['Allston', 'Brighton', 'Chinatown'],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    )
  },
  checkIsland: function () {
    //this.isIsland = this.neighbours.length === 0 ? true : false
    this.isIsland = !Boolean(this.neighbours.length) //se for 0 é falso (original). Mas na pergunta é para mostrar true se não tiver vizinhos. Por isso inverti com !
    return console.log(this.isIsland)
  }
}
myCountry.describe()
myCountry.checkIsland()
