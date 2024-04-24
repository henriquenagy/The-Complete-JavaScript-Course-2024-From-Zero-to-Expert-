const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 },
  [weekdays[4]]: { open: 11, close: 23 },
  [weekdays[5]]: { open: 0, close: 24 },
};
//Object keys para criar novo array
const properties = Object.keys(openingHours);
console.log(properties); //Saída: [ 'thu', 'fri', 'sat' ]
//For of para chamar os valores do objeto  opening hours
for (const diaz of Object.keys(openingHours)) console.log(diaz); // Saída: thu  fri  sat
//Mesclando tudo
let openStr = `We are open on ${properties.length} days: `;
for (const dayz of properties) openStr += `${dayz}, `;
console.log(openStr); //Saída: We are open on 3 days: thu, fri, sat,

//usando Property Values
const usandoValues = Object.values(openingHours);
console.log(usandoValues); //Saída: [{ open: 12, close: 22 },{ open: 11, close: 23 },{ open: 0, close: 24 }]

//Entire object
const usandoEntries = Object.entries(openingHours);
console.log(usandoEntries); //Saída: [[ 'thu', { open: 12, close: 22 } ],[ 'fri', { open: 11, close: 23 } ],[ 'sat', { open: 0, close: 24 } ]]

//Entries com for of. Veja que [index, item] foi usado [day, { open, close }] que é de acordo com o conteúdo dentro de usandoEntries (veja a saída de log anterior)
for (const [day, { open, close }] of usandoEntries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
