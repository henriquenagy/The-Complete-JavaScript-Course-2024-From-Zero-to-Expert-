const contador = {
  valor: 0,
  incrementar() {
    this.valor++, console.log(this.valor)
  }
}
const botao = document.querySelector('button')
botao.addEventListener('click', contador.incrementar.bind(contador))
