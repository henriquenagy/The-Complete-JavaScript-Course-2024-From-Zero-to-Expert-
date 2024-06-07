const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
movements.forEach(function (insideNumbers) {
  if (insideNumbers > 0) console.log(`You've deposited ${insideNumbers}`)
  else console.log(`You withdrew ${Math.abs(insideNumbers)}`)
})
