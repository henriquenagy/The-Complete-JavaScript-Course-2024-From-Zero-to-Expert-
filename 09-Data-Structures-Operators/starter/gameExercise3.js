const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1. Create an array 'events' of the different game events that happened (no duplicates)
const events2 = [...new Set(gameEvents.values())]; //ESSE É O CORRETO
console.log(events2); // [ '⚽️ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card' ]

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const time2 = [...gameEvents.keys()].pop();
console.log(time2);
console.log(
  `An event happened, on average, every ${time2 / gameEvents.size} minutes`
);

//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
gameEvents.forEach((value, key) => {
  if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  else if (key > 45) console.log(`[SECOND HALF] ${key}: ${value}`);
});

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
