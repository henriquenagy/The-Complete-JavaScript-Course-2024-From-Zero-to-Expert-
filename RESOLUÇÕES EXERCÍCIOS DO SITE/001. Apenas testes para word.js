//return < 0, A,B (keep order)
//return > 0, B,A (Switch order)
//strings
const owners = ['Nagys', 'Nagynho', 'Danis', 'Maris']
console.log(owners.sort()) //[ 'Danis', 'Maris', 'Nagynho', 'Nagys' ]
//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort()) //[-130, -400, -650, 1300, 200, 3000, 450, 70] Só com sort assim direto zoa tudo não separa direito os números
//ascending
movements.sort((a, b) => {
 if (a > b) return 1
 if (a < b) return -1
})
console.log(movements) //[-650, -400, -130, 70, 200, 450, 1300, 3000]
//A maneira correta enxuta para ascending seria:
movements.sort((a, b) => a - b)

//descending
movements.sort((a, b) => {
 if (a > b) return -1
 if (a < b) return 1
})
console.log(movements) //[3000, 1300,  450, 200, 70, -130, -400, -650]
//A maneira correta enxuta para descending seria:
movements.sort((a, b) => b - a)
