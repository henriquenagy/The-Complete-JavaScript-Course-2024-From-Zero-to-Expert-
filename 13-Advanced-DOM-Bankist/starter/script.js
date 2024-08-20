'use strict'
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')
const btnScrollto = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
const navItens = document.querySelectorAll('.nav__link')
const outsideUlItens = document.querySelector('.nav__links')

const openModal = function (e) {
 e.preventDefault()
 modal.classList.remove('hidden')
 overlay.classList.remove('hidden')
}

const closeModal = function () {
 modal.classList.add('hidden')
 overlay.classList.add('hidden')
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
 if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
  closeModal()
 }
})

//Button scrolling (Ver aula do dia 16/08)
btnScrollto.addEventListener('click', function (e) {
 section1.scrollIntoView({ behavior: 'smooth' })
})

//Método avançado para o page navigation (o simples ver o dia 20/08)
outsideUlItens.addEventListener('click', function (e) {
 e.preventDefault()
 console.log(e.target) //Mostra onde foi o clique, só pra vc saber

 if (e.target.classList.contains('nav__link')) {
  const id = e.target.getAttribute('href')
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
 }
})

/* ///////////////  Aprendizados da aula 189 scroll dia 16/08  /////////////////////
const btnScrollto = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollto.addEventListener('click', function (e) {
 console.log('Clique no botão do evento pra funfar') // Precisa clicar no botão para os dados aparecer, coloquei isso pra vc lembrar
 const s1coords = section1.getBoundingClientRect()
 console.log(s1coords) // DOMRect {x: 0, y: 572, width: 904, height: 1652.6875, top: 572, …} - Esse é relacionado a section 1 - a tela inteira visivel
 console.log(e.target.getBoundingClientRect()) // DOMRect {x: 30, y: 488.46875, width: 110, height: 29, top: 488.46875, …} - Esse é onde o botão está posicionado no momento atual da tela, e se movimentar a tela, a sua posição altera. O target é o item dessa função btnscrollto
 //deprecated > console.log(`Current scroll X${window.pageXoffset} and Y ${window.pageYOffset}`) ISSO NÃO FUNCIONA MAIS
 console.log(`Current scroll X: ${window.scrollX} and Y: ${window.scrollY}`) //Current scroll X: 0 and Y: 394 > A medida que move a tela altera os valores. De inicio fica tudo zero
 console.log(
  `Height viewport: ${document.documentElement.clientHeight} and width viewport: ${document.documentElement.clientWidth}`
  ) //Height viewport: 572 and width viewport: 904
  
  //Agora sim bora scrolling the page
  window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY) // Método base
  window.scrollTo({
   left: s1coords.left + window.scrollX,
   top: s1coords.top + window.scrollY,
   behavior: 'smooth'
   }) //Pra usar o behavior precisa especificar o left e top
   
   //Maneira mais moderna do jonas
   section1.scrollIntoView({ behavior: 'smooth' }) // Só pega em browser mais recentes
   })*/

/*////////////////////////// aula 187 dia 14/08/24 //////////////////////////////////
  //console.log(document.documentElement) //Pega toda a estrutura html
  //console.log(document.head) // Só a parte do head
  //console.log(document.body) //E esse todo o body
  
  //Nodelist - se eu atualizar algum item da pasta (remover, por ex) ele não atualiza sozinho, se mantem na forma original como de inicio
  const allSections = document.querySelectorAll('.section')
  //console.log(allSections) // NodeList(4) [section#section--1.section, section#section--2.section, section#section--3.section, section.section.section--sign-up]
  
  //HTMLcollection - esse é o inverso de node, atualiza sozinho após qqer ação (remover inserir)
  document.getElementById('section--1')
  const allButtons = document.getElementsByTagName('button')
  //console.log(allButtons) // HTMLCollection(9) (mostra todos os botões e suas classes)
  //console.log(document.getElementsByClassName('btn')) //HTMLCollection(5) -  Botões com a classe somente
  
  //Creating and inserting elements with IS inside HTML
  const header = document.querySelector('.header')
  const message = document.createElement('div')
  message.classList.add('cookie-message')
  //message.textContent = 'We use cookies for improved functionality and analytics.'
  message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'
  
  //header.prepend(message) // Ou usa esse(vai pra cima/antes)
  header.append(message) //Ou usa esse (baixo/depois)
  //header.append(message.cloneNode(true)) //Esse aqui vc pode combinar com os anteriores, ai aparece nas duas posições. Os anteriores juntos não funciona.
  
  //header.before(message) //Outra forma, ao invés de usar prepend e append
  //header.after(message)
  
  // Delete inserted div element
  document.querySelector('.btn--close-cookie').addEventListener('click', function () {
   message.parentElement.removeChild(message)
})

//Styles [15/08/24 aula 188]
message.style.backgroundColor = '#37383d' //Inserindo cor fundo na nova div
message.style.width = '120vw' // aumentar a largura para pega a tela inteira

console.log(message.style.color) // Only work for inline style, aqui apareceu nada no console
console.log(message.style.backgroundColor) // rgb(55, 56, 61) - aqui já funciona (inline style)

console.log(getComputedStyle(message)) //aparece mais de 100
console.log(getComputedStyle(message).color) //rgb(187, 187, 187)
console.log(getComputedStyle(message).height) //50px

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px' // Aumentar a altura da div

document.documentElement.style.setProperty('--color-primary', 'orangered') // Trocando a cor de um elemento

//Attributes / Pega atributos padrões do html
const logo = document.querySelector('.nav__logo')
console.log(logo.alt) //  Bankist logo
console.log(logo.src) // link da imagem
console.log(logo.className) //nav__logo

logo.alt = 'Trocando alt da logo' //<img src="img/logo.png" alt="Trocando alt da logo" class="nav__logo" id="logo">

//Non-standard - designer não é padrão html, eu que criei isso lá

console.log(logo.designer) //não pega pois não é padrão
console.log(logo.getAttribute('designer')) //najao - esse pega
logo.setAttribute('company', 'bankist') // Insere um atributo não padrão á logo, no código html

console.log(logo.getAttribute('src')) // img/logo.png

const link = document.querySelector('.nav__link--btn')
console.log(link.href) // link completaço
console.log(link.getAttribute('href')) //# - somente a hash

//Classes
logo.classList.add('c', 'j') //adding multiple classes
logo.classList.remove('c', 'j')
logo.classList.toggle('c')
logo.classList.contains('c')

//Don't use
logo.className = 'nometop'*/

/* ////////////////////////// aula 190 dia 19/08/24 //////////////////////////////////

const h1 = document.querySelector('h1')
//Evento de mouse passando por algo, tem duas formas (Peguei do MDN):
addEventListener('mouseenter', event => {})
onmouseenter = event => {}

//Tipo 1 com addEventListener: Permite adicionar multiplos eventos dentro dele
h1.addEventListener('mouseenter', function () {
 alert('addEventListener')
})
//Tipo 2 com onmouseenter: Só permite esse evento em específico.
h1.onmouseenter = function () {
 alert('onmouseenter')
}

//Esse abaixo aparece somente uma vez, pois remove o evento.
const alertH1 = function () {
 alert('addEventListener: aparece só uma vez')
 h1.removeEventListener('mouseenter', alertH1)
}
h1.addEventListener('mouseenter', alertH1)

//if you need to run an EventListener only once you can use this too:
h1.addEventListener(
 'mouseenter',
 function () {
  alert('Only once')
 },
 { once: true }
)

//Agora um tempo para remover o evento
const alertH1 = function () {
 alert('addEventListener: tempo para remover evento')
}
h1.addEventListener('mouseenter', alertH1)
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 10000)*/

/* //////////////////////////// aula 192 dia 19/08/24 //////////////////////////////////
// Event Propagation in Practice
const GeradorAleatory = () => Math.trunc(Math.random() * 255) + 1
const randColor = () => {
 return `rgb(${GeradorAleatory()},${GeradorAleatory()},${GeradorAleatory()})`
}
//target é onde o clique/evento aconteceu, esse vai ser igual para todos. Já current tag é a tag que foi selecionada, embora não tenha sido a clicada (dependendo do clique.)
document.querySelector('.nav__link').addEventListener('click', function (e) {
 this.style.backgroundColor = randColor()
 console.log('LINK', e.target, e.currentTarget)
 console.log(e.currentTarget === this) //Só pra checar se a clicada é a mesma da função

 // Stop propagation, ou seja, com isso vai pegar somente a função da qual o evento foi criado para ter o clique, e não nas outras tags pai.
 //e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
 this.style.backgroundColor = randColor()
 console.log('CONTAINER', e.target, e.currentTarget)
})

document.querySelector('.nav').addEventListener(
 'click',
 function (e) {
  this.style.backgroundColor = randColor()
  console.log('NAV', e.target, e.currentTarget)
 } //,true
 //> se por true aqui, o primeiro item a aparecem como clicado é o NAV antes dos outros 2
)*/

/*//////////////////////////// Page navigation (20/08/24) //////////////////////////////////
navItens.forEach(function (el) {
 el.addEventListener('click', function (e) {
  e.preventDefault()
  const id = this.getAttribute('href')
  console.log(id)
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
 })
})*/
