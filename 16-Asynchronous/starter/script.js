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

//--------------------------- SEGUNDO MÉTODO AULA 252 PRA FRENTE
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
}
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

//-------------------MANEIRA COM O PROMISE 4 - CATCH ERROR DO JONAS
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
})

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
