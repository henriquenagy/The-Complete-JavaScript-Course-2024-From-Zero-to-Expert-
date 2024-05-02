'use strict'
const books = [
  { keywords: ['computer science', 'programming'] },
  { keywords: ['computer science', 'javascript'] },
  { keywords: ['software', 'C', 'engineering'] }
]
let allKeywords = []
for (const components of books) allKeywords.push(...components.keywords)
console.log(allKeywords) // ['computer science','programming','computer science','javascript','software','C','engineering']
