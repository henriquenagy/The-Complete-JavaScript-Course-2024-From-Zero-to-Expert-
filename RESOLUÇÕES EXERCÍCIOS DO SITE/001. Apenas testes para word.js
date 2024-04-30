const game = { scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'] }
const marcadores = {}
for (let i = 0; i < game.scored.length; i++) {
  const player = game.scored[i]
  marcadores[player] = (marcadores[player] || 0) + 1
}
console.log(marcadores) //{ Lewandowski: 2, Gnarby: 1, Hummels: 1 }
