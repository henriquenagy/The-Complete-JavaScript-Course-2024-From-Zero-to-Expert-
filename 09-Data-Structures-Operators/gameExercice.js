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
//1. Create one player array for each team
const [players1, players2] = game.players
//console.log(players1, players2)

//2. 1st player is the GK, others are fieldplayers
const [gk, ...fieldPlayers] = players1
//console.log(gk, fieldPlayers)

//3. allPLayers in a single array
const allPLayers = [...players1, ...players2]
//console.log(allPLayers)

//4. Substitute players
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic']
//console.log(playersFinal)

//5. Create new odds for each team
const {
  odds: { team1: red, x: draw, team2: yellow }
} = game
//console.log(red, draw, yellow) //SAÌDA:1.33 3.25 6.5

//6. Function that receives arbitrary number of player name
const printGoals = function (...players) {
  console.log(players)
  console.log(`${players.length} goals were scored`)
}
//printGoals(...game.scored)

//7. Who will win based on the odds (1a opção Ñ vai funcionar, pois a expressão só pega true e false)
team1 < team2 && console.log(`${game.team1} is more likely to win`)
team1 > team2 && console.log(`${game.team2} is more likely to win`)
/* MINHAS SOLUÇÕES
switch (team1 < team2) {
  case true:
    console.log(`${game.team1} is more likely to win`)
    break
  case false:
    console.log(`${game.team2} is more likely to win`)
    break
  case team1 === team2:
    console.log(`Teams have same percentage, probably a draw`) //Ñ vai funcionar, pois a expressão só pega true e false
    break
  default:
    console.log(`Both team has the chance to win 50/50`)
}*/
/*
//Essa funciona, pois a expressão dada como true dá ok na team1 < ou > que team2, mas oo prof não queria assim
switch (true) {
  case team1 < team2:
    console.log(`${game.team1} is more likely to win`)
    break
  case team1 > team2:
    console.log(`${game.team2} is more likely to win`)
    break
  case team1 === team2:
    console.log(`Teams have same percentage, probably a draw`)
    break
  default:
    console.log(`Both teams have a 50/50 chance of winning`)
}
*/
