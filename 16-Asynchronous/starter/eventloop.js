/* //-----------------------MODELO 1
console.log('Test Start')
setTimeout(() => console.log('0 Sec timer'), 0)
Promise.resolve('Resolved promise 1').then(res => console.log(res))
console.log('Test end')
//Live reload enabled.
//Test Start > eventloop.js:1
//Test end > eventloop.js:4
//Resolved promise 1 > eventloop.js:3
//0 Sec timer > eventloop.js:2
*/

//-----------------------MODELO 2
console.log('Test Start')
setTimeout(() => console.log('0 Sec timer'), 0)
Promise.resolve('Resolved promise 1').then(res => console.log(res))
Promise.resolve('Resolved promise 2').then(res => {
 for (let i = 0; i < 1000000000; i++) {}
 console.log(res)
})
console.log('Test end')
//Live reload enabled.
//Test Start > eventloop.js:1
//Test end > eventloop.js:4
//Resolved promise 1 > eventloop.js:3
//Resolved promise 2 > eventloop.js:19
//0 Sec timer > eventloop.js:2
