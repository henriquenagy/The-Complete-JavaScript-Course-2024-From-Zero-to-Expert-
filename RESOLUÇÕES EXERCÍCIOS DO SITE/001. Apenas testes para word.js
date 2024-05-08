const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [69, '🔴 Red card']
])
gameEvents.forEach((value, key) => {
  if (key < 45) console.log(`[FIRST HALF] ${key}: ${value}`)
  else if (key > 45) console.log(`[SECOND HALF] ${key}: ${value}`)
})
//output: [FIRST HALF] 17: ⚽️ GOAL / [SECOND HALF] 47: ⚽️ GOAL / [SECOND HALF] 61: 🔁 Substitution / [SECOND HALF] 69: 🔴 Red card

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'
  console.log(`[${half} HALF] ${min}: ${event}`)
}
//output: [FIRST HALF] 17: ⚽️ GOAL / [SECOND HALF] 47: ⚽️ GOAL / [SECOND HALF] 61: 🔁 Substitution / [SECOND HALF] 69: 🔴 Red card
