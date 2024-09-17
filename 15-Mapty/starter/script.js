'use strict'
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const form = document.querySelector('.form')
const containerWorkouts = document.querySelector('.workouts')
const inputType = document.querySelector('.form__input--type')
const inputDistance = document.querySelector('.form__input--distance')
const inputDuration = document.querySelector('.form__input--duration')
const inputCadence = document.querySelector('.form__input--cadence')
const inputElevation = document.querySelector('.form__input--elevation')

if (navigator.geolocation)
 navigator.geolocation.getCurrentPosition(
  function (position) {
   console.log(position) // GeolocationPosition   coords: GeolocationCoordinates {latitude: -24.2876416, longitude: -46.9598208, altitude: null, accuracy: 3565.3799699389365, altitudeAccuracy: null, …} timestamp :  1726498260417
   const { latitude } = position.coords
   const { longitude } = position.coords
   console.log(latitude, longitude) // -24.2876416 -46.9598208
   console.log(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`)
   const coords = [latitude, longitude]

   //console.log(map) só para vermos todas as funcionalidades atreladas a essa biblioteca, quais podemos usar e quais são protegidas com _

   const map = L.map('map').setView(coords, 13)

   L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map)
   //map.on nós que add com base na biblioteca do leaflet, não é algo do JS. o L marker já veio padrão q copiei do site, só inserirmos ai dentro
   map.on('click', function (mapEvent) {
    console.log(mapEvent) // Nos mostra todos os eventos que podemos usar quando clica no mapa > {originalEvent: PointerEvent, containerPoint: p, layerPoint: p, latlng: v, type: 'click', …} e outros...
    const { lat, lng } = mapEvent.latlng
    L.marker([lat, lng])
     .addTo(map)
     .bindPopup(
      L.popup({
       maxWidth: 250,
       minWidth: 200,
       autoclose: false,
       colseOnclick: false,
       className: 'running-popup cycling-popup'
      })
     )
     .setPopupContent('Workout')
     .openPopup()
   })
  },
  function () {
   alert('Could not get your position')
  }
 )
