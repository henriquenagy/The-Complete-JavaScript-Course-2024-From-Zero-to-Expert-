'use strict'
const books = [
  { title: '1. Algorithms', onlineContent: true },
  {
    title: '2. Structure and Interpretation of Computer Programs',
    onlineContent: false
  },
  {
    title: "3. Computer Systems: A Programmer's Perspective",
    onlineContent: false
  },
  { title: '4. Operating System Concepts', onlineContent: false },
  { title: '5. Engineering Mathematics', onlineContent: true },
  { title: '6. The Personal MBA: Master the Art of Business' },
  { title: '7. Crafting Interpreters' },
  { title: '8. Deep Work: Rules for Focused Success in a Distracted World' }
]
for (let item of books)
  item.onlineContent ??
    console.log(`${item.title} provides no data about its online content`)
