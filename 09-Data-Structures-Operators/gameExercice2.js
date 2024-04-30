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
for (const [caçapa, goleador] of game.scored.entries()) {
  // console.log(`Goal ${caçapa + 1}: ${goleador}`)
}

//# 2 - Calculate average odd
let average = 0
for (const oddAverage of Object.values(game.odds)) average += oddAverage
average /= Object.values(game.odds).length
//console.log(average)

//#3 - Print de odds in a nice way
/*
for (const [firstData, secondData] of Object.entries(game.odds)) {
  firstData === 'team1' || 'team2'
    ? console.log(`Odd of victory ${game.firstData}: ${secondData}`)
    : console.log(`Odd of draw: ${secondData}`)
}*/

//#4 Bônus
const marcadores = {}
for (const player of game.scored) {
  if (marcadores[player]) marcadores[player]++
  //Se já tiver o nome no objeto, incrementa o resultado dele
  else marcadores[player] = 1 // Se não tiver o nome no objeto, ele passa a ser 1
}
console.log(marcadores) //Saída: { Lewandowski: 2, Gnarby: 1, Hummels: 1 }
