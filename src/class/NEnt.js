export class NEnt {
  constructor() {
    this.valor = 0
  }

  cargar(numero) {
    this.valor = numero
  }

  descargar() {
    return this.valor.toString()
  }

  invertir() {
    let digito
    let resultado = 0
    let numero = this.valor
    while (numero > 0) {
      digito = numero % 10
      resultado = resultado * 10 + digito
      numero /= 10
    }
    this.valor = resultado
  }

  numeroDigitos() {
    this.valor = this.valor.toString().length
  }

  verificarPar() {
    const resto = this.valor % 2
    const boleano = resto === 0
    return boleano.toString()
  }

  verificarPrimos() {
    let r
    let c = 0
    for (let i = 1; i <= this.valor; i++) {
      r = this.valor % i
      if (r === 0) {
        c++
      }
    }
    return c === 2
  }

  verificarCapicua() {
    const capicua = this.valor
    this.invertir()
    return capicua === this.valor
  }
}
