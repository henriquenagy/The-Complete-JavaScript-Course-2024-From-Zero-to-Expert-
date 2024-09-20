'use strict'
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
 date = new Date()
 id = (Date.now() + '').slice(-10) // Ideal seria por library de criador de id

 constructor(coords, distance, duration) {
  this.coords = coords // [lat,lng]
  this.distance = distance //km
  this.duration = duration //min
 }
}

class Running extends Workout {
 constructor(coords, distance, duration, cadence) {
  super(coords, distance, duration)
  this.cadence = cadence
  this.calcPace()
 }

 calcPace() {
  this.pace = this.duration / this.distance
  return this.pace
 }
}
class Cycling extends Workout {
 constructor(coords, distance, duration, elevation) {
  super(coords, distance, duration)
  this.elevation = elevation
  this.calcSpeed()
 }
 calcSpeed() {
  this.speed = this.distance / (this.duration / 60)
  return this.speed
 }
}

// só pra testar no console e ver se funcionou o heritance
//const run1 = new Running([39, -12], 5.2, 24, 178)
//const cycling1 = new Cycling([39, -12], 27, 95, 523)
//console.log(run1, cycling1)

//---------------------------------------APPLICATION ARCHITETURE
const form = document.querySelector('.form')
const containerWorkouts = document.querySelector('.workouts')
const inputType = document.querySelector('.form__input--type')
const inputDistance = document.querySelector('.form__input--distance')
const inputDuration = document.querySelector('.form__input--duration')
const inputCadence = document.querySelector('.form__input--cadence')
const inputElevation = document.querySelector('.form__input--elevation')

class App {
 #map
 #mapEvent
 constructor() {
  this._getPosition()
  //-------------------------- Formulário
  form.addEventListener('submit', this._newWorkout.bind(this))
  //----------------------- Quando trocar o type de running para cycling, ai já troca também o cadence para Elev gain
  inputType.addEventListener('change', this._toggleElevationField)
 }

 //--------------Método position
 _getPosition() {
  if (navigator.geolocation)
   navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
    // Precisa usar o bind para apontar ao método
    alert('Could not get your position')
   })
 }
 //--------------Método loadMap
 _loadMap(position) {
  // Verifique se o mapa já foi inicializado
  if (this.#map) return // Se já existe um mapa, não reinitialize
  const { latitude } = position.coords
  const { longitude } = position.coords
  const coords = [latitude, longitude]
  //Condição if (this.#map) return;: Antes de inicializar o mapa com L.map(), verificamos se this.#map já foi definido. Se sim, a função retorna e não tenta inicializar o mapa novamente, evitando o erro de "Map container is already initialized".

  // Inicializa o mapa apenas uma vez
  this.#map = L.map('map').setView(coords, 13) //Só funciona por conta do .bind(this) dentro do navigator após o if lá no inicio

  L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
   attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.#map)

  // Adiciona o evento de clique no mapa
  this.#map.on('click', this._showForm.bind(this)) // Precisa usar o bind para apontar ao método

  console.log(position) // GeolocationPosition
  console.log(latitude, longitude) // -24.2876416 -46.9598208
  console.log(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`)
 }

 //--------------Método Showform
 _showForm(mapE) {
  this.#mapEvent = mapE
  form.classList.remove('hidden')
  inputDistance.focus()
 }

 //--------------Método Togglelevation
 _toggleElevationField() {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
 }

 //--------------Método New workout
 _newWorkout(e) {
  e.preventDefault()

  // antes era assim dentro de cada if running ou cycling >  if (!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(cadence))  return alert('inputs have to be positive numbers') // o if só dispara o alert se o valor de distance não for um número finito. valores que podem ativar o alert seriam:   NaN (Not a Number),  Infinity e -Infinity.
  //Agora cria um pra facilitar
  const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))

  //Get the data from forms
  const type = inputType.value
  const distance = +inputDistance.value
  const duration = +inputDuration.value

  //If workout running, create running object
  if (type === 'running') {
   const cadence = +inputCadence.value
   //Check if data is valid
   if (!validInputs(distance, duration, cadence)) return alert('inputs have to be positive numbers')
  }

  //If workout running, create cycling object
  if (type === 'cycling') {
   const elevation = +inputElevation.value
   //Check if data is valid
   if (!validInputs(distance, duration, cadence)) return alert('inputs have to be positive numbers')
  }

  //Add new object to workout array

  //Render workout on map as marker
  const { lat, lng } = this.#mapEvent.latlng
  L.marker([lat, lng])
   .addTo(this.#map)
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

  //Hide form + clear input fields
  inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = ''
 }
}

const app = new App()
app._getPosition()
