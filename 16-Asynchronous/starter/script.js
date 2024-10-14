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

/* //------------------- Challenge 2 Dia 09/10
const wait = function (seconds) {
 return new Promise(function (resolve) {
  setTimeout(resolve, seconds * 1000)
 })
}

const imgContainer = document.querySelector('.images') //Peguei direto do HTML

//--------------------Criando nossa própria promise que vai ser chamada depois inserindo a url da imagem em imgPath
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
//--------------------Chamando nossa própria promise criada
createImage('img/img-1.jpg') //Ela retorna uma Promise que resolve quando a imagem carrega com sucesso ou rejeita se houver um erro.
 .then(img => {
  currentImg = img
  console.log('image 1 loaded')
  return wait(2) //Usar return aqui é importante porque estamos esperando que o wait(2) seja resolvido antes de continuar com o próximo .then().
 })
 .then(() => {
  currentImg.style.display = 'none' //após os 2 segundos esconde
  return createImage('img/img-2.jpg') // O return permite que o próximo .then() espere até que a nova imagem seja carregada.
 })
 .then(img => {
  currentImg = img
  console.log('image 2 loaded')
  return wait(2)
 })
 .then(() => {
  currentImg.style.display = 'none' //após os 2 segundos esconde
 })
 .catch(err => console.error(err))*/

/* //------------------- Dia 11-10-24 Aula 263

//-------------------MÉTODO 1
const whereAmI1 = async function (country) {
 //FORMATO COM FETCH  fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => res.json(); console.log(res))

 const resultOrResponse = await fetch(`https://restcountries.com/v3.1/name/${country}`) //Pode chamar de result ou response a const. Jonas pôs res de response
 console.log(resultOrResponse) //Response {type: 'cors', url: 'https://restcountries.com/v3.1/name/portugal', redirected: false, status: 200, ok: true, …}
}
whereAmI1('portugal')
console.log('FIRST CONSOLE SHOW THIS, THEN SHOW RES')

//-------------------MÉTODO 2
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
const whereAmI2 = async function (country) {
 const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
 const data = await res.json()
 renderCountry(data[0])
}
whereAmI2('portugal')
console.log('FIRST CONSOLE SHOW THIS, THEN SHOW RES')



//-------------------MÉTODO 3
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

const getPosition = function () {
 return new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject)
 })
}
const whereAmI3 = async function () {
 //Geolocation
 const pos = await getPosition()
 const { latitude: lat, longitude: lng } = pos.coords

 //Reverse Geocoding
 const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
 const dataGeo = await resGeo.json()
 console.log(dataGeo)

 //CountryData
 const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`)
 const data = await res.json()
 renderCountry(data[0])
}
whereAmI3()
console.log('FIRST CONSOLE SHOW THIS, THEN SHOW RES')*/

/* // Aula 264
 try {
 let y = 1
 const x = 2
 x = 3
} catch (err) {
 alert(err.message) // Assignment to constant variable. - Pega o erro que apareceria no console e guarda pra ele, mas aqui mostra com alert


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

const getPosition = function () {
 return new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject)
 })
}
const whereAmI3 = (async function () {
 try {
  //Geolocation
  const pos = await getPosition()
  const { latitude: lat, longitude: lng } = pos.coords

  //Reverse Geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  const dataGeo = await resGeo.json()
  console.log(dataGeo)

  //CountryData
  const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`)
  const data = await res.json()
  renderCountry(data[0])

  return `You are in ${dataGeo.city}, ${dataGeo.country}`
 } catch (err) {
  console.log(`🔥 ${err} AQUIIIII`)
  renderError(`Something went wrong 🔥 ${err.message}`)

  //Reject promise returned from async function
  throw err
 }
})(
 //assim o passo 3 aparece antes do passo 2
console.log('1: Will get location')
//const city = whereAmI3() >  console.log(city) This return a promise > Promise {<pending>} > get from countrydata return
whereAmI3()
 .then(city => console.log(`2: ${city}`))
 .catch(error => console.error(`2: ${error.message}`))
console.log('3: Finished getting location')

 //assim o passo 2 aparece antes do passo 3 sequencia certa
console.log('1: Will get location')
whereAmI3()
 .then(city => console.log(`2: ${city}`))
 .catch(error => console.error(`2: ${error.message}`))
 .finally(() => console.log('3: Finished getting location'))


//Agora o mesmo de cima porém com try e catch
 (async function () {
  try {
   const city = await whereAmI3()
   console.log(`2: ${city}`)
  } catch (err) {
   console.error(`2: ${err.message} 💥`)
  }
  console.log('3: Finished getting location')
 })()
)*/

//------------------- Aula 266 Dia 14/10/24
/*const get3Countries = async function (c1, c2, c3) {
 try {
  const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`)
  const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`)
  const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`)
  console.log([data1.capital, data2.capital, data3.capital])
 } catch (err) {
  console.error(err)
 }
}
get3Countries('brazil', 'peru', 'argentina')*/

const get3Countries = async function (c1, c2, c3) {
 try {
  const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`)
  const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`)
  const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
  console.log([data1.capital, data2.capital, data3.capital])
 } catch (err) {
  console.error(err)
 }
}
get3Countries('brazil', 'peru', 'argentina')

//resolver erro da tela
