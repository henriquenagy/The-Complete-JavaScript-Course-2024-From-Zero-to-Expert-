const convertTitleCase = function (title) {
 const capitalizer = str => str[0].toUpperCase() + str.slice(1)

 const exceptionsWords = [
  'a',
  'an',
  'and',
  'the',
  'but',
  'or',
  'on',
  'in',
  'with'
 ]
 const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => (exceptionsWords.includes(word) ? word : capitalizer(word)))
  .join(' ')

 return capitalizer(titleCase)
}

console.log(convertTitleCase('A cat sat on the mat with a ball.'))
console.log(
 convertTitleCase(
  'An artist painted a picture on the canvas, and it sparkled in the sunlight.'
 )
)
