'use strict'
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')

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

/*////////////////////////// aula 187 dia 14/08/24 //////////////////////////////////
console.log(document.documentElement) //Pega toda a estrutura html
console.log(document.head) // Só a parte do head
console.log(document.body) //E esse todo o body

//Nodelist - se eu atualizar algum item da pasta (remover, por ex) ele não atualiza sozinho, se mantem na forma original como de inicio
const allSections = document.querySelectorAll('.section')
console.log(allSections) // NodeList(4) [section#section--1.section, section#section--2.section, section#section--3.section, section.section.section--sign-up]

//HTMLcollection - esse é o inverso de node, atualiza sozinho após qqer ação (remover inserir)
document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons) // HTMLCollection(9) (mostra todos os botões e suas classes)
console.log(document.getElementsByClassName('btn')) //HTMLCollection(5) -  Botões com a classe somente

//Creating and inserting elements with IS inside HTML
const header = document.querySelector('.header')
const message = document.createElement('div')
message.classList.add('cookie-message')
//message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML =
 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

header.prepend(message) // Ou usa esse(vai pra cima/antes)
//header.append(message) //Ou usa esse (baixo/depois)
header.append(message.cloneNode(true)) //Esse aqui vc pode combinar com os anteriores, ai aparece nas duas posições. Os anteriores juntos não funciona.

header.before(message) //Outra forma, ao invés de usar prepend e append
header.after(message)

// Delete inserted div element
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
 message.parentElement.removeChild(message)
})*/

//
