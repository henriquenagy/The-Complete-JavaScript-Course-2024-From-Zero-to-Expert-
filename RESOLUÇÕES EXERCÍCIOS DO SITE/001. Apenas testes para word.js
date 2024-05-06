const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!']
])

console.log(...question) //[ 'question', 'What is the best programming language in the world?' ] [ 1, 'c' ] [ 2, 'Java' ] [ 3, 'Javascript' ] [ 'correct', 3 ] [ true, 'Correct🎉' ] [ false, 'Try again!' ]
console.log(...question.keys()) //question 1 2 3 correct true false
console.log(...question.values()) //What is the best programming language in the world? c Java Javascript 3 Correct🎉 Try again!

//Quiz app
console.log(question.get('question')) //Mostra a 1a pergunta, ai abaixo no for mostra somente as 3 opções da pergunta
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
} //What is the best programming language in the world? Answer 1: c Answer 2: Java  Answer 3: Javascript
const answer = Number(prompt('Your answer')) //Pede para o user digitar
console.log(answer) //mostra o valor digitado no prompt
console.log(question.get(question.get('correct') === answer)) //São dois get, um compara o correct q é 3 com o digitado pelo usuário. Sua saída será true ou false, ai o outro get externo pega esse resultado e compara com o q tem no question
