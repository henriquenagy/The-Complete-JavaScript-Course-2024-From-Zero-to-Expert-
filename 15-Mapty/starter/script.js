'use strict'
//Class Pai de running e cycling que são filhos/heritage
class Workout {
 date = new Date()
 id = (Date.now() + '').slice(-10) // Ideal seria por library de criador de id
 clicks = 0
 constructor(coords, distance, duration) {
  this.coords = coords // [lat,lng]
  this.distance = distance //km
  this.duration = duration //min
 }

 _setDescription() {
  // prettier-ignore evita a quebra de linha, mantem tudo numa única linha
  // prettier-ignore
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // prettier-ignore
  this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
 }

 //Para usar lá no método de  _moveToPopup(e) quando clicar na div com as infos
 click() {
  this.clicks++
 }
}

//Filho de Workout
class Running extends Workout {
 type = 'running'
 constructor(coords, distance, duration, cadence) {
  super(coords, distance, duration)
  this.cadence = cadence
  this.calcPace()
  this._setDescription()
 }

 calcPace() {
  this.pace = this.duration / this.distance
  return this.pace
 }
}

//Filho de Workout
class Cycling extends Workout {
 type = 'cycling'

 constructor(coords, distance, duration, elevation) {
  super(coords, distance, duration)
  this.elevation = elevation
  this.calcSpeed()
  this._setDescription()
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
 #mapZoomlevel = 13
 #mapEvent
 #workouts = []
 constructor() {
  this._getPosition()
  //-------------------------- Formulário
  form.addEventListener('submit', this._newWorkout.bind(this))
  //----------------------- Quando trocar o type de running para cycling, ai já troca também o cadence para Elev gain
  inputType.addEventListener('change', this._toggleElevationField)
  //Chama o método la embaixão que pega o click na div com o conteúdo de running ou cycling
  containerWorkouts.addEventListener('click', this._moveToPopup.bind(this))
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
  this.#map = L.map('map').setView(coords, this.#mapZoomlevel) //Só funciona por conta do .bind(this) dentro do navigator após o if lá no inicio

  L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
   attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.#map)

  // Adiciona o evento de clique no mapa
  this.#map.on('click', this._showForm.bind(this)) // Precisa usar o bind para apontar ao método

  //console.log(position) // GeolocationPosition
  //console.log(latitude, longitude) // -24.2876416 -46.9598208
  //console.log(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`)
 }

 //--------------Método Showform
 _showForm(mapE) {
  this.#mapEvent = mapE
  form.classList.remove('hidden')
  inputDistance.focus()
 }

 _hideForm() {
  //Empty Inputs
  inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = ''
  form.style.display = 'none'
  form.classList.add('hidden')
  setTimeout(() => (form.style.display = 'grid'), 1000)
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
  const allPositive = (...inputs) => inputs.every(inp => inp > 0)

  //Get the data from forms
  const type = inputType.value
  const distance = +inputDistance.value
  const duration = +inputDuration.value
  const { lat, lng } = this.#mapEvent.latlng
  let workout

  //If workout running, create running object
  if (type === 'running') {
   const cadence = +inputCadence.value
   //Check if data is valid
   if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence))
    return alert('inputs have to be positive numbers')
   workout = new Running([lat, lng], distance, duration, cadence)
  }

  //If workout running, create cycling object
  if (type === 'cycling') {
   const elevation = +inputElevation.value
   //Check if data is valid
   if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration))
    return alert('inputs have to be positive numbers')
   workout = new Cycling([lat, lng], distance, duration, elevation)
  }

  //Add new object to workout array
  this.#workouts.push(workout)
  console.log(workout)

  //Render workout on map as marker
  this.renderWorkoutMarker(workout)

  //Render workout on list
  this._renderWorkout(workout)

  //Hide form + clear input fields
  this._hideForm()
 }

 //Render workout on map as marker
 renderWorkoutMarker(workout) {
  L.marker(workout.coords)
   .addTo(this.#map)
   .bindPopup(
    L.popup({
     maxWidth: 250,
     minWidth: 200,
     autoclose: false,
     closeOnclick: false,
     className: `${workout.type}-popup`
    })
   )
   .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
   .openPopup()
 }

 _renderWorkout(workout) {
  let html = `
  <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`

  if (workout.type === 'running')
   html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`

  if (workout.type === 'cycling')
   html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`

  //Pegou pelo html a seção form, pra inserir o html adjacent após o último item de form
  form.insertAdjacentHTML('afterend', html)
 }

 //Aqui pega o click da caixa lateral esq.com o conteúdo do running/cycling
 _moveToPopup(e) {
  const workoutEL = e.target.closest('.workout')
  console.log(workoutEL)
  if (!workoutEL) return

  const workout = this.#workouts.find(work => work.id === workoutEL.dataset.id)
  console.log(workout)

  this.#map.setView(workout.coords, this.#mapZoomlevel, {
   animate: true,
   pan: {
    duration: 1
   }
  })
  //Using public interface
  workout.click()
 }
}

const app = new App()
app._getPosition()
