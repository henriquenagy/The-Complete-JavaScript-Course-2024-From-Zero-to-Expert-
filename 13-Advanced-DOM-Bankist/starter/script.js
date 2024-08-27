'use strict'
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')
const btnScrollto = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
const navItens = document.querySelectorAll('.nav__link')
const outsideUlItens = document.querySelector('.nav__links')
//tab itens
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')
//fade
const nav = document.querySelector('.nav')

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

//Abre e fecha abas com botões
tabsContainer.addEventListener('click', function (e) {
 const clicked = e.target.closest('.operations__tab')
 if (!clicked) return
 tabs.forEach(t => t.classList.remove('operations__tab--active'))
 clicked.classList.add('operations__tab--active')

 //activate content area based on the clicked button
 tabsContent.forEach(tabs => tabs.classList.remove('operations__content--active'))
 document
  .querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active')
})

//Menu fade animation - cursor hover.
const handleHover = function (e) {
 if (e.target.classList.contains('nav__link')) {
  const link = e.target
  const siblings = link.closest('.nav').querySelectorAll('.nav__link')
  const logo = link.closest('.nav').querySelector('img')

  siblings.forEach(el => {
   if (el !== link) el.style.opacity = this
  })
  logo.style.opacity = this
 }
}
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

//Sticky Navigation: Intersection Observer API
const getNavHeightDireto = nav.getBoundingClientRect().height
const headr = document.querySelector('.header')

//Menu fixo
const stickyNav = function (entries) {
 const [entry] = entries
 if (!entry.isIntersecting) nav.classList.add('sticky')
 else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(stickyNav, {
 root: null,
 threshold: 0,
 rootMargin: `-${getNavHeightDireto}px`
})
headerObserver.observe(headr)

//Reveal Sections
const getAllSections = document.querySelectorAll('.section')
const avoidMiddleError = function () {
 const revealSection = function (entries, observer) {
  const [entry] = entries

  if (entry.isIntersecting) {
   entry.target.classList.remove('section--hidden')
   observer.unobserve(entry.target)
  }
 }
 return new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
 })
}
getAllSections.forEach(section => {
 section.classList.add('section--hidden')
 avoidMiddleError().observe(section)
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

/* //////////////////////// Aula 21/08 194. DOM traversing ///////////////////////////////
const h1 = document.querySelector('h1')
//>>>>>>>>>>>>>>>>> Going downwards: child. Vendo no DOM os elementos filhos do H1 referente a uma classe específica, ai pega os itens que vc quer que aparece no DOM pra alterar algo. Aqui vamos alterar a cor do texto:
console.log(h1.querySelectorAll('.highlight')) //NodeList(2) [span.highlight, span.highlight]
console.log(h1.childNodes) // NodeList(9)
console.log(h1.children) // HTMLCollection(3) [span.highlight, br, span.highlight]
//Vamos pegar o h1.children, usando o 1º e o último elementor dentro dele
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'darkblue'

//>>>>>>>>>>>>>>>>> Going upwards: parents
console.log(h1.parentNode) //<div class='header__title'>...</div>
console.log(h1.parentElement) //Nesse caso, é o mesmo de cima do parentNode

//Nesse html, antes do h1, tem o .header__title, depois nav e depois o header. Aqui quero pintar o fundo todo, nesse caso o header
h1.closest('.header').style.background = 'var(--gradient-secondary)' //o var usamos só pra vc saber que dá pra pegar do css e usar aqui

h1.closest('h1').style.background = 'var(--gradient-primary)' // Cor no próprio h1

//>>>>>>>>>>>>>>>>> going sideways: siblings
console.log(h1.previousElementSibling) //mull - é pq nesse caso não tem nada antes do h1
console.log(h1.nextElementSibling) //<h1>A simpler...<h4>  - Agora pegou o texto que tem depois do h1, pq tem né hehehehh

console.log(h1.previousSibling) //#text (os dois resultam iguais, mas vamos usar só os 2 de cima, e não esse aqui e o debaixo)
console.log(h1.nextSibling) //#text produced by the nextSibling property apparently is the formatting whitespace surrounding the elements.

console.log(h1.parentElement.children) //HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img] > Aqui pega ele próprio e os próx. elementos após ele

//Pegar todos os elementos e mudar algo neles, sem pegar o próprio h1, Jonas usou o spread porém no meu não deu certo, ai o GPT usou o array.from
//[...h1.parentElement.children].forEach(function (el) { - Dessa forma usando o spread ... não deu certo, ai o correto é usar conforma abaixo
Array.from(h1.parentElement.children).forEach(function (el) {
 if (el !== h1) el.style.transform = 'scale(0.5)'
})*/

/*/////////////////// tabbed Component - Aula 195 dia 21 e 22 ///////////////////////////
//DEPOIS INFORMA SOBRE O USO DO CLOSEST. A função se refere a div que contem os 3 botões, e o evento de clique está na div. Porém, depois usa-se o closest para pegar o item que tem o closest como sendo a classe operation__tab, que só vai pegar se for ele mesmo ou acima dele. No caso de clique na div não pega, pois o botão está abaixo dela, ai na div retorna null
tabsContainer.addEventListener('click', function (e) {
 const clicked = e.target.closest('.operations__tab') //Para pegar somente a classe do botão, e não da div externa
 if (!clicked) return // Essa verificação (if (!clicked) return;) faz com que o código retorne imediatamente se clicked for null, evitando o erro no console, ou seja, se clicked realmente existe, ai sim executa o código abaixo. Dá no mesmo se fizer o inverso, if (clicked) {//código abaixo aqui dentro}. JOnas chama de > guard clause
 //remove a classe que faz o botão subir assim que clicado
 tabs.forEach(t => t.classList.remove('operations__tab--active'))
 clicked.classList.add('operations__tab--active') // Se colocar aqui direto sem o if anterior, fica aparecendo esse erro no console: [Uncaught TypeError: Cannot read properties of null (reading 'classList') at HTMLDivElement.<anonymous>]]

 //activate content area based on the clicked button
 console.log(clicked.dataset.tab)

 tabsContent.forEach(tabs => tabs.classList.remove('operations__content--active'))
 document
  .querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active')
})*/

/* /////////////////// aula 196 dia 23/08 ///////////////////
//Menu fade animation - cursor hover.
//Colocamos essa parte para fora das 2 funções, para organizar melhor e enxutar tudo.
const handleHover = function (e) {
 //console.log(this, e.currentTarget) // 0.5 <nav class='nav'>...</nav>  > Só para ver se tá pegando ok mesmo
 if (e.target.classList.contains('nav__link')) {
  const link = e.target
  const siblings = link.closest('.nav').querySelectorAll('.nav__link')
  const logo = link.closest('.nav').querySelector('img')

  siblings.forEach(el => {
   if (el !== link) el.style.opacity = this
  })
  logo.style.opacity = this
 }
}

//nav.addEventListener('mouseover', function (e) {handleHover(e, 0.5)}) Os dois estavam assim, mas Jonas nos lembrou do Bind method para encurtar
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))*/

/*/////////////////// Aula 198 Dia 26/08  ///////////////////
//Sticky Navigation: Intersection Observer API
const headr = document.querySelector('.header')

//Pegar a altura certa do height NAV para por lá em rootMargin
const getNavHeight = nav.getBoundingClientRect()
console.log(getNavHeight) //DOMRect {x: 30, y: -8, width: 842, height: 90, top: -8, …}
const getNavHeightDireto = nav.getBoundingClientRect().height
console.log(getNavHeightDireto) //90 -- assim pega só o height direto

const stickyNav = function (entries) {
 const [entry] = entries //pega só o 1º item do array
 console.log(entry) // Dados de IntersectionObserverEntry  > {time: 271.19999999925494, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: true, …}

 if (!entry.isIntersecting) nav.classList.add('sticky')
 else nav.classList.remove('sticky')
}
//90px é a altura do nav, e só funciona px, rem ou % não pega. Dá para por o height direto rootMargin: '-90px' ou via `-${nomedavariável}px` igual tá ali
const headerObserver = new IntersectionObserver(stickyNav, {
 root: null, // default case or viewport
 threshold: 0,
 rootMargin: `-${getNavHeightDireto}px`
})

headerObserver.observe(headr)*/

/* /////////////////// Aula 199 Dia 27/08/24 ///////////////////
//Reveal Sections
const getAllSections = document.querySelectorAll('.section')
//If you open page in middle position (between section 1 and 2), refreshing page (f5), section 1 and 2 will not appears, observer will not work correctly. To avoid this, insert a new const befor the const revealsection that we only created at class:
const avoidMiddleError = function () {
 const revealSection = function (entries, observer) {
  const [entry] = entries
  console.log(entry) //Pode remover, ta ai só pra vc aprender
  //Antes tava sem o if, ai a 1ª seção já tinha a intersecção ativa e ñ funcionava. Ai ele colocou o if pra se tiver com intersecção, ai sim add a classe. Também dá pra por ! pra inverter e só pegar se ainda não tiver com a intersecção.
  if (entry.isIntersecting) {
   entry.target.classList.remove('section--hidden')
   //Agora para evitar ter q observar todo o movimento, mesmo após já ter sido usado, tem q parar  isso, melhora na performance. AI só pega a movimentação uma vez
   observer.unobserve(entry.target)
  }
 }
 //root é null para pegar toda a viewport, e o threshold acima de 0, pois se for zero vai revelar mesmo antes de aparecer na tela. Então coloca uma % para aparecer após ter a intersecção
 return new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
 })
}
getAllSections.forEach(section => {
 section.classList.add('section--hidden')
 avoidMiddleError().observe(section)
})*/

///ds
