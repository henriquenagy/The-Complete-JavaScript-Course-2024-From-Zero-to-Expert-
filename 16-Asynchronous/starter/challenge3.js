/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

//------------------- Challenge 2 Dia 09/10

//--->>> Criação da Promise local 1
const wait = function (seconds) {
 return new Promise(function (resolve) {
  setTimeout(resolve, seconds * 1000)
 })
}

const imgContainer = document.querySelector('.images') //Peguei direto do HTML

//--->>> Criação da Promise local 2. Criando nossa própria promise que vai ser chamada depois inserindo a url da imagem em imgPath
const createImage = function (imgPath) {
 return new Promise(function (resolve, reject) {
  const img = document.createElement('img') //cria um elemento <img>, mas ainda não o coloca na página.
  img.src = imgPath // Definindo o caminho da imagem
  // Ouvindo o evento 'load' (imagem carregada com sucesso)
  img.addEventListener('load', function () {
   imgContainer.append(img)
   resolve(img)
  })
  // Ouvindo o evento 'error' (erro no carregamento da imagem)
  img.addEventListener('error', function () {
   reject(new Error('Image not found')) // Rejeita a Promise em caso de erro
  })
 })
}

let currentImg // Essa variável é usada para armazenar a imagem que foi carregada por último.

//--->>> Consumindo as promises anteriores

const loadNPause = async function () {
 try {
  //Load image 1
  let img = await createImage('img/img-1.jpg')
  console.log('image 1 loaded')
  await wait(2)
  img.style.display = 'none'

  //Load image 2
  img = await createImage('img/img-2.jpg')
  console.log('image 2 loaded')
  await wait(2)
  img.style.display = 'none'
 } catch (error) {
  console.error('Erro:', error)
 }
}
loadNPause()

//PART 2
