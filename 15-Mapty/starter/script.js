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
   console.log(` https://www.google.com/maps/@${latitude},${longitude}`)
   const coords = [latitude, longitude]

   const map = L.map('map').setView(coords, 13)

   L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map)

   L.marker(coords).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.').openPopup()
  },
  function () {
   alert('Could not get your position')
  }
 )
