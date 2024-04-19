'use strict'
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  odds: { team1: 11.33, x: 3.25, team2: 6.5 }
}
game.odds.team1 < game.odds.team2 &&
  console.log(`${game.team1} is more likely to win`)
game.odds.team1 > game.odds.team2 &&
  console.log(`${game.team2} is more likely to win`)
