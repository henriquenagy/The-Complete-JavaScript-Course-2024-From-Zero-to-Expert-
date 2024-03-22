'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//---------- PARA ABRIR O POPUP-------------------
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Ñ precisa de {} se é uma linha só
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//---------------Forma completa PARA ABRIR. acima encurtei-------------
/*
console.log(btnsOpenModal);

//Ñ precisa de {} se é uma linha só
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
*/

//---------- PARA FECHAR O POPUP-------------------
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//---------------Forma completa PARA FECHAR. acima encurtei-------------
/*  
//duas funções, porém com o mesmo evento dentro. ai cria só uma varíuavel com função, que executa o mesmo evento. depois para as duas avaríavels ´so chamar a função.
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
    console.log('Tecla esc apertada');
  }
});

/*//Ele usou mnais um if para inverter o coando hidden
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
      console.log('Tecla esc apertada');
    }
  }
});
*/
