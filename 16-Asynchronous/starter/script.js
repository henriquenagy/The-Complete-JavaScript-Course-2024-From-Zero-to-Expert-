//https://github.com/public-apis/public-apis
//https://restcountries.com
'use strict'
/* //---------------------------PRIMEIRO MÉTODO
const countriesContainer = document.querySelector('.countries')

const renderCountry = function (data, classname = '') {
 const languages = Object.values(data.languages)
 const currencies = Object.values(data.currencies)
 const html = `
 <article class="country ${classname}">
 <img class="country__img" src= "${data.flags.svg}">
 <div class="country__data">
  <h3 class="country__name"> ${data.name.official}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
   1
  )} million</p>         
  <p class="country__row"><span>🗣️</span>${languages[0]}</p>
  <p class="country__row"><span>💰</span>${currencies[0].name}</p>
  </div>
 </article>`

 countriesContainer.insertAdjacentHTML('beforeend', html)
 countriesContainer.style.opacity = 1
}

const getCountryAndNeighbour = function (country) {
 //Ajax call country 1
 const request = new XMLHttpRequest()
 request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
 request.send()

 request.addEventListener('load', function () {
  //console.log(this.responseText) todos os dados sem formatação
  //const data = JSON.parse(this.responseText) data sem destructuring, abaixo usei []
  const [data] = JSON.parse(this.responseText)
  console.log(data) //use this to study the data you want to use.

  // Renderize o país principal
  renderCountry(data)

  /// Obtenha os países vizinhos
  const neighbours = data.borders

  if (!neighbours) return

  // Iterar sobre cada país vizinho e fazer uma requisição para renderizar
  neighbours.forEach(function (neighbour) {
   const request2 = new XMLHttpRequest()
   request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
   request2.send()

   request2.addEventListener('load', function () {
    const [data2] = JSON.parse(this.responseText)
    console.log(data2, 'neighbour')

    // Renderize o país vizinho com uma classe adicional
    renderCountry(data2, 'neighbour')
   })
  })
 })
}
// Sample countries whose details we want to display.
getCountryAndNeighbour('brazil') */
/* //--------------------------- SEGUNDO MÉTODO AULA 252 PRA FRENTE
const countriesContainer = document.querySelector('.countries')
const btn = document.querySelector('.btn-country')
const renderCountry = function (data, classname = '') {
 const languages = Object.values(data.languages || {})
 const currencies = Object.values(data.currencies || {})

 const html = `
  <article class="country ${classname}">
    <img class="country__img" src="${data.flags.svg}">
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million</p>
      <p class="country__row"><span>🗣️</span>${languages[0] || 'N/A'}</p>
      <p class="country__row"><span>💰</span>${currencies[0]?.name || 'N/A'}</p>
    </div>
  </article>`

 countriesContainer.insertAdjacentHTML('beforeend', html)
 //countriesContainer.style.opacity = 1 SÓ PRA TESTAR O FINALLY
}*/
/*//-------------------MANEIRA COM O PROMISE 1
const getCountryData = function (country) {
 fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(function (response) {
   console.log(response)
   return response.json()
  }) //até aqui é promise, abaixo o then é o callback
  .then(function (data) {
   console.log(data)
   renderCountry(data[0])
  })
}
getCountryData('brazil')*/

/*//-------------------MANEIRA COM O PROMISE 2 - Mais enxuto
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
   .then(response => response.json())
   .then(data => renderCountry(data[0]))}
 getCountryData('brazil')*/

/*//-------------------MANEIRA COM O PROMISE 3 - COMO NÃO FAZER PRA PEGAR ERROS
const getCountryData = function (country) {
 fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(
   res => res.json(),
   err => alert(err)
  )
  .then(data => {
   renderCountry(data[0])
   const neighbour = data[0].borders ? data[0].borders[0] : null
   if (!neighbour) return

   // Fetch the neighbouring country
   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
  })
  .then(
   res => res.json(),
   err => alert(err)
  )
  .then(data => {
   renderCountry(data[0], 'neighbour')
  })
}
btn.addEventListener('click', function () {
 getCountryData('germany')
})*/

/* //-------------------MANEIRA COM O PROMISE 4 - CATCH ERROR DO JONAS
const renderError = function (msg) {
 countriesContainer.insertAdjacentText('beforeend', msg)
 //countriesContainer.style.opacity = 1 SÓ PRA TESTAR O FINALLY
}

const getCountryData = function (country) {
 fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(res => res.json())
  .then(data => {
   renderCountry(data[0])
   const neighbour = data[0].borders ? data[0].borders[0] : null
   if (!neighbour) return

   //COUNTRY 2
   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
  }) //then method is only called when the promise is fufilled, catch is only called when promise is rejected. And the last one, the method finally, we use for something that always need to happen, no matter the result of the promise.
  .then(res => res.json())
  .then(data => renderCountry(data[0], 'neighbour'))
  .catch(err => {
   console.log(`${err} DEU ERRO JÁ ERA`)
   renderError(`Something went wrong!! ${err.message} TRY AGAIN`)
  })
  .finally(() => {
   countriesContainer.style.opacity = 1 //basta apagar esse code de renderCountry e renderError que vai funcionar do mesmo jeito colocando aqui
  })
}
btn.addEventListener('click', function () {
 //getCountryData('DADWQAs') //pra testar o catch: TypeError: Cannot read properties of undefined (reading 'languages') DEU ERRO JÁ ERA
 getCountryData('brazil')
})*/

/*//-------------------MANEIRA COM O PROMISE 5 - CATCH ERROR COMPLETO DO GPT
const getCountryData = function (country) {
 fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(res => {
   if (!res.ok) throw new Error(`Country not found (${res.status})`)
   return res.json()
  })
  .then(data => {
   renderCountry(data[0])
   const neighbour = data[0].borders ? data[0].borders[0] : null
   if (!neighbour) throw new Error('No neighbour found!')
   // Fetch the neighbouring country
   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
  })
  .then(res => {
   if (!res.ok) throw new Error(`Neighbour country not found (${res.status})`)
   return res.json()
  })
  .then(data => {
   renderCountry(data[0], 'neighbour')
  })
  .catch(err => {
   console.error(`${err}`)
   countriesContainer.insertAdjacentText('beforeend', `Something went wrong: ${err.message}`)
  })
}
getCountryData('germany')*/

/* //-------------------MANEIRA COM O PROMISE 6 - JONAS PARECIDO COM O GPT
const renderError = function (msg) {
 countriesContainer.insertAdjacentText('beforeend', msg)
 //countriesContainer.style.opacity = 1 SÓ PRA TESTAR O FINALLY
}

const getCountryData = function (country) {
 fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(res => {
   console.log(res) //ok:false  status :  404 > aparecem no browser caso tenha algum erro, tipo erro no nome do pais. Se for OK, ai fica ok: true status: 200
   if (!res.ok) throw new Error(`Country not found (${res.status})`) // Esse erro aparece junto com o rendererror lá de baixo. Ou seja, deu 404, ele pula as linhas até chegar em rendererror e aparecena tela o texto
   return res.json() //quando tem mais um item dentro de then, precisa por {} e escrever return antes do json
  })
  .then(data => {
   renderCountry(data[0])
   //const neighbour = data[0].borders ? data[0].borders[0] : null
   const neighbour = 'esodoskdforçarerror' //só para forçar o erro no code abaixo
   if (!neighbour) return

   //COUNTRY 2
   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
  })
  .then(res => {
   if (!res.ok) throw new Error(`Neighbour not found (${res.status})`)
   return res.json()
  })
  .then(data => renderCountry(data[0], 'neighbour'))
  .catch(err => {
   console.log(`${err} DEU ERRO JÁ ERA`)
   renderError(`Something went wrong!! ${err.message} TRY AGAIN`)
  })
  .finally(() => {
   countriesContainer.style.opacity = 1
  })
}
btn.addEventListener('click', function () {
 //getCountryData('DADWQAs') // forçar erro no country
 getCountryData('brazil')
})*/

/* //-------------------MANEIRA COM O PROMISE 7 - Jonas com metodos encurtados para contry e neighbour com getjson
const renderError = function (msg) {
 countriesContainer.insertAdjacentText('beforeend', msg)
 //countriesContainer.style.opacity = 1 SÓ PRA TESTAR O FINALLY
}
//Tiramos de dentro do getcountrydata (tinha 2 desse) e fizemos um só
const getJson = function (url, errorMsg = 'Something went wrong') {
 return fetch(url).then(res => {
  if (!res.ok) throw new Error(`${errorMsg} (${res.status})`)
  return res.json()
 })
}

const getCountryData = function (country) {
 getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
  .then(data => {
   renderCountry(data[0])
   const neighbour = data[0].borders ? data[0].borders[0] : null
   if (!neighbour) throw new Error(`no neighbour found!`)

   //COUNTRY 2
   return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Neighbour not found')
  })
  .then(data => renderCountry(data[0], 'neighbour'))
  .catch(err => {
   console.log(`${err} DEU ERRO JÁ ERA`)
   renderError(`Something went wrong!! ${err.message} TRY AGAIN`)
  })
  .finally(() => {
   countriesContainer.style.opacity = 1
  })
}
btn.addEventListener('click', function () {
 //getCountryData('DADWQAs') // forçar erro no country
 getCountryData('brazil')
})
//getCountryData('australia') // forçar outro erro
*/

/*//------------------- Aula 260 dia 07/10/24
 //Teste 1 de promise
const lotteryPromise = new Promise(function (resolve, reject) {
 if (Math.random() >= 0.5) {
  resolve('You win 🏆')
 } else {
  reject('You lost your money 💸')
 }
})
lotteryPromise.then(result => console.log(result)).catch(deuErro => console.error(deuErro))


 //Teste 2 de promise
const lotteryPromise = new Promise(function (resolve, reject) {
 console.log('Lottery draw is happening 🔮')
 setTimeout(function () {
  if (Math.random() >= 0.5) {
   resolve('You win 🏆')
  } else {
   reject(new Error('You lost your money 💸'))
  }
 }, 2000)
})
lotteryPromise.then(result => console.log(result)).catch(deuErro => console.error(deuErro)) 

//Teste 3 de promise com tempo
const lotteryPromise = new Promise(function (resolve, reject) {
 console.log('Lottery draw is happening 🔮')
 setTimeout(function () {
  if (Math.random() >= 0.5) {
   resolve('You win 🏆')
  } else {
   reject(new Error('You lost your money 💸'))
  }
 }, 2000)
})
lotteryPromise.then(result => console.log(result)).catch(deuErro => console.error(deuErro))

//Promisifying setTimeout
const wait = function (seconds) {
 return new Promise(function (resolve) {
  setTimeout(resolve, seconds * 1000)
 })
}
wait(2)
 .then(() => {
  console.log('1 second passed')
  return wait(1)
 })
 .then(() => {
  console.log('2 seconds passed')
  return wait(1)
 })
 .then(() => {
  console.log('3 seconds passed')
  return wait(1)
 })
 .then(() => console.log('Last seconds passed'))
*/

/* //------------------- Aula 261 dia 08/10/24
//navigator.geolocation.getCurrentPosition(position => console.log(position),err => console.error(err)) //GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1728398722874}

//Completo usando uma const como função pra chamar depois
//const getPosition = function () {return new Promise(function (resolve, reject) {navigator.geolocation.getCurrentPosition( position => resolve(position), err => reject(err))})}

//Enxuto, é o mesmo de cima o completo
const getPosition = function () {
 return new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject)
 })
}
getPosition().then(pos => console.log(pos)) //GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1728399305155}

//Usando junto com o challenge 1
const btn = document.querySelector('.btn-country')
const getPosition = function () {
 return new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject)
 })
}
//getPosition().then(pos => console.log(pos))

const whereAmI = function () {
 getPosition()
  .then(pos => {
   //console.log(pos.coords) //used to check if it is an array or object and to catch the needed data to use below
   const { latitude: lat, longitude: lng } = pos.coords

   return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  })
  .then(res => {
   if (!res.ok) throw new Error(`Deu erro no 1º Then (${res.status})`)
   return res.json()
  })
  .then(data => {
   console.log(`You are in ${data.city}, ${data.country}`)
  })
  .catch(error => console.error(`Erro pego pelo catch o último salvador ${error.message}`))
}
btn.addEventListener('click', whereAmI)*/

//------------------- Challenge 2 Dia 09/10
// Coding Challenge #2

/* 
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
*/
