const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'
//Arrow function para usar dentro do const output
const getcode = str => str.slice(0, 3).toUpperCase() //Só para encurtar o code dentro do output

for (let itens of flights.split('+')) {
  const [type, from, to, time] = itens.split(';')
}
console.log(type, from, to, time)
