'use strict'
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
}
//# 1 - Player with scored goals
for (const [caçapa, goleador] of game.scored.entries())
//  console.log(`Goal ${caçapa + 1}: ${goleador}`)

//# 2 - Calculate average odd
const mediaz = []
for (let calcOdd of Object.values(game.odds)){
mediaz.push(calcOdd)
}
console.log(mediaz);

//PAREI AQUI ENTENDER MELHOR O RACIOCINIO