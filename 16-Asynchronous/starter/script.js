//https://github.com/public-apis/public-apis
//https://restcountries.com
'use strict'
//-----------------------------------------------------------
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
getCountryAndNeighbour('brazil')
