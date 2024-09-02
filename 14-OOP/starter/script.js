'use strict'
class Carro {
 constructor(marca, modelo) {
  this.marca = marca
  this.modelo = modelo
 }
 ligar() {
  console.log(`${this.marca} ${this.modelo} ligado!`)
 }
}
const meuCarro = new Carro('Toyota', 'Corolla')
meuCarro.ligar() // 'Toyota Corolla ligado!'

class CarroEletrico extends Carro {
 constructor(marca, modelo, bateria) {
  super(marca, modelo) // Chama o construtor da classe `Carro`
  this.bateria = bateria
 }
 recarregar() {
  console.log(`${this.marca} ${this.modelo} com ${this.bateria}% de bateria está recarregando.`)
 }
}

const carroNovo = new CarroEletrico('Tesla', 'Model S', 80)
carroNovo.ligar() // 'Tesla Model S ligado!'
carroNovo.recarregar() // 'Tesla Model S com 80% de bateria está recarregando.'
