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
let map, mapEvent // Global variable

//Implementando o code com base no mapty architecture que o jonas fez
class App {
 constructor() {}

 //--------------Método position
 _getPosition() {
  if (navigator.geolocation)
   navigator.geolocation.getCurrentPosition(this._loadMap, function () {
    alert('Could not get your position')
   })
 }
 //--------------Método loadMap
 _loadMap(position) {
  console.log(position) // GeolocationPosition
  const { latitude } = position.coords
  const { longitude } = position.coords
  console.log(latitude, longitude) // -24.2876416 -46.9598208
  console.log(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`)
  const coords = [latitude, longitude]

  map = L.map('map').setView(coords, 13)

  L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
   attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  map.on('click', function (mapE) {
   mapEvent = mapE
   form.classList.remove('hidden')
   inputDistance.focus()
  })
 }

 //--------------Método Showform
 _showForm() {}

 //--------------Método Togglelevation
 _toggleElevationField() {}

 //--------------Método New workout
 _newWorkout() {
  //newRunning(){}
  //newCycling(){}
 }
}

form.addEventListener('submit', function (e) {
 e.preventDefault()

 // Clear input fields
 inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = ''

 // Display Marker
 const { lat, lng } = mapEvent.latlng
 L.marker([lat, lng])
  .addTo(map)
  .bindPopup(
   L.popup({
    maxWidth: 250,
    minWidth: 200,
    autoclose: false,
    closeOnclick: false,
    className: 'running-popup cycling-popup'
   })
  )
  .setPopupContent('Workout')
  .openPopup()
})

// Quando trocar o type de running para cycling, ai já troca também o cadence para Elev gain
inputType.addEventListener('change', function () {
 inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
 inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})
