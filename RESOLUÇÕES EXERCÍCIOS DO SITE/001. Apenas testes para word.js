const account1 = {
  owner: 'Jonas Schmedtmann',
  pin: 1111
}
const account2 = {
  owner: 'Jessica Davis',
  pin: 2222
}
const accounts = [account1, account2]
const gettingNamez = function (allnamez) {
  //Receive the array with accounts
  allnamez.forEach(function (uniqueName) {
    //Iterar sobre cada account (1 e 2)
    //Agora cria um novo item dentro do array chamado username
    uniqueName.username = uniqueName.owner
      .toLowerCase()
      .split(' ')
      .map(Upper => Upper[0])
      .join('')
  })
}
gettingNamez(accounts)
console.log(accounts)
