import { NEnt } from './NEnt'

export default class Vector {
  constructor() {
    this.v = []
    this.n = 0
  }

  cargar(numeroDeElementos, valorInicial, valorFinal) {
    this.n = numeroDeElementos
    for (let i = 0; i < this.n; i++) {
      const numeroAleatorio =
        Math.floor(Math.random() * valorFinal) + valorInicial
      this.v[i] = numeroAleatorio
    }
  }

  cargarElementoXElemento(numero) {
    this.v[this.n] = numero
    this.n++
  }

  // descargar(){
  //   let s = ''
  //   for(let i = 0 ; i<this.n; i++){
  //     s = s + this.v[i] + ' | '
  //   }
  //   return s;
  // }

  descargar() {
    return '{' + this.v.toString() + '}'
  }

  cargarSerieAritmetica(numeroDeElementos, valorInicial, razon) {
    this.n = numeroDeElementos
    for (let i = 0; i < this.n; i++) {
      this.v[i] = valorInicial + i * razon
    }
  }

  cargarSerieFibonacci(numeroDeElementos) {
    this.n = numeroDeElementos
    this.v[0] = 0
    this.v[1] = 1

    if (this.n < 0) return

    if (this.n === 1) return

    for (let i = 2; i < this.n; i++) {
      this.v[i] = this.v[i - 1] + this.v[i - 2]
    }
  }

  seleccionarPorPosicion(intervalo, v2) {
    const numeroDePosiciones = this.n / intervalo
    for (let i = 0; i < numeroDePosiciones; i++) {
      v2.cargarElementoXElemento(this.v[i * intervalo])
    }
  }

  seleccionarPrimos(v2) {
    const n1 = new NEnt()
    for (let i = 0; i < this.n; i++) {
      n1.cargar(this.v[i])
      if (n1.verificarPrimos()) {
        v2.cargarElementoXElemento(this.v[i])
      }
    }
  }

  seleccionarNoPrimos(v3) {
    const n1 = new NEnt()
    for (let i = 0; i < this.n; i++) {
      n1.cargar(this.v[i])
      if (!n1.verificarPrimos()) {
        v3.cargarElementoXElemento(this.v[i])
      }
    }
  }

  seleccionarBuenos(v2) {
    const media = this.promedio()
    const estandar = this.desviacionEstandar()
    const rango = media + estandar

    for (let i = 0; i < this.n; i++) {
      if (this.v[i] > rango) {
        v2.cargarElementoXElemento(this.v[i])
      }
    }
  }

  maximo() {
    let dr = this.v[0]
    for (let i = 1; i < this.n; i++) {
      if (this.v[i] > dr) {
        dr = this.v[i]
      }
    }
    return dr
  }

  frecuencia(elemento) {
    let c = 0
    for (let i = this.n - 1; i >= 0; i--) {
      if (this.v[i] === elemento) {
        c++
      }
    }
    return c
  }

  maximoYfrecuencia(objetoMaxYFrec) {
    objetoMaxYFrec.maximo = this.maximo()
    objetoMaxYFrec.frecuencia = this.frecuencia(objetoMaxYFrec.maximo)
  }

  promedio() {
    let suma = 0
    for (let i = 0; i < this.n; i++) {
      suma += this.v[i]
    }
    return suma / this.n
  }

  desviacionMedia() {
    const media = this.promedio()
    let suma = 0
    for (let i = 0; i < this.n; i++) {
      suma += Math.abs(this.v[i] - media)
    }
    return suma / this.n
  }

  desviacionEstandar() {
    const media = this.promedio()
    let suma = 0
    for (let i = 0; i < this.n; i++) {
      suma += Math.pow(this.v[i] - media, 2)
    }
    return Math.sqrt(suma / this.n)
  }

  busquedaBinaria(valorBuscado) {
    this.ordenamientoBurbujaAscendente()
    let izquierda = 0
    let derecha = this.n - 1

    while (izquierda <= derecha) {
      const medio = izquierda + Math.floor((derecha - izquierda) / 2)

      if (this.v[medio] === valorBuscado) {
        return true
      }

      if (this.v[medio] > valorBuscado) {
        derecha = medio - 1
      } else {
        izquierda = medio + 1
      }
    }

    return false
  }

  busquedaSecuencial(valorBuscado) {
    for (let i = 0; i < this.n; i++) {
      if (valorBuscado === this.v[i]) {
        return true
      }
    }

    return false
  }

  retornarDimension() {
    return this.n
  }

  retornarElemento(elemento) {
    return this.v[elemento]
  }

  retornarVector() {
    return this.v
  }

  eliminarDuplicados() {
    this.v = Array.from(new Set(this.v))
    this.n = this.v.length
  }

  intercambiarElementos(a, b) {
    const variableAuxiliar = this.v[a]
    this.v[a] = this.v[b]
    this.v[b] = variableAuxiliar
  }

  ordenamientoPorIntercambioAscendente() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (j !== this.n - 1) {
          if (this.v[j] > this.v[j + 1]) {
            this.intercambiarElementos(j, j + 1)
          }
        }
      }
    }
  }

  ordenamientoPorIntercambioDescendente() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (j !== this.n - 1) {
          if (this.v[j] < this.v[j + 1]) {
            this.intercambiarElementos(j, j + 1)
          }
        }
      }
    }
  }

  ordenamientoPorSeleccionAscendente() {
    for (let i = 0; i < this.n; i++) {
      let indiceMinimo = i
      for (let j = i + 1; j < this.n; j++) {
        if (this.v[j] < this.v[indiceMinimo]) {
          indiceMinimo = j
        }
      }
      const temp = this.v[i]
      this.v[i] = this.v[indiceMinimo]
      this.v[indiceMinimo] = temp
    }
  }

  ordenamientoPorSeleccionDescendente() {
    for (let i = 0; i < this.n; i++) {
      let indicemaximo = i
      for (let j = i + 1; j < this.n; j++) {
        if (this.v[j] > this.v[indicemaximo]) {
          indicemaximo = j
        }
      }
      const temp = this.v[i]
      this.v[i] = this.v[indicemaximo]
      this.v[indicemaximo] = temp
    }
  }

  ordenamientoBurbujaAscendente() {
    let intercambio
    do {
      intercambio = false
      for (let i = 0; i < this.n - 1; i++) {
        if (this.v[i] > this.v[i + 1]) {
          const temp = this.v[i]
          this.v[i] = this.v[i + 1]
          this.v[i + 1] = temp
          intercambio = true
        }
      }
    } while (intercambio)
  }

  ordenamientoBurbujaDescendente() {
    let intercambio
    do {
      intercambio = false
      for (let i = 0; i < this.n - 1; i++) {
        if (this.v[i] < this.v[i + 1]) {
          const temp = this.v[i]
          this.v[i] = this.v[i + 1]
          this.v[i + 1] = temp
          intercambio = true
        }
      }
    } while (intercambio)
  }

  pertenencia(numero) {
    let pertenece = false
    for (let i = 0; i < this.n; i++) {
      if (this.v[i] === numero) {
        pertenece = true
        break
      }
    }
    return pertenece
  }

  interseccionDeConjuntos(v1, v2) {
    const longitudV1 = v1.retornarDimension()
    const longitudV2 = v2.retornarDimension()
    const vector1 = v1.retornarVector()
    const vector2 = v2.retornarVector()

    for (let i = 0; i < longitudV1; i++) {
      for (let j = 0; j < longitudV2; j++) {
        if (vector1[i] === vector2[j]) {
          this.cargarElementoXElemento(vector1[i])
          break
        }
      }
    }
    this.eliminarDuplicados()
  }

  unionDeConjuntos(v1, v2) {
    const longitudV1 = v1.retornarDimension()
    const longitudV2 = v2.retornarDimension()
    const vector1 = v1.retornarVector()
    const vector2 = v2.retornarVector()

    for (let i = 0; i < longitudV1; i++) {
      this.cargarElementoXElemento(vector1[i])
    }

    for (let j = 0; j < longitudV2; j++) {
      this.cargarElementoXElemento(vector2[j])
    }

    this.eliminarDuplicados()
  }

  diferenciaDeConjuntosAB(v1, v2) {
    const longitudV1 = v1.retornarDimension()
    const vector1 = v1.retornarVector()

    for (let i = 0; i < longitudV1; i++) {
      if (!v2.pertenencia(vector1[i])) {
        this.cargarElementoXElemento(vector1[i])
      }
    }

    this.eliminarDuplicados()
  }

  diferenciaDeConjuntosBA(v1, v2) {
    const longitudV2 = v2.retornarDimension()
    const vector2 = v2.retornarVector()

    for (let i = 0; i < longitudV2; i++) {
      if (!v1.pertenencia(vector2[i])) {
        this.cargarElementoXElemento(vector2[i])
      }
    }

    this.eliminarDuplicados()
  }

  segmentarParYNoPar() {
    const n1 = new NEnt()
    const n2 = new NEnt()
    for (let p = 0; p < this.n - 1; p++) {
      for (let d = p + 1; d < this.n; d++) {
        n1.cargar(this.v[d])
        n2.cargar(this.v[p])
        if (
          (n1.verificarPar() && !n2.verificarPar()) ||
          (n1.verificarPar() && n2.verificarPar() && this.v[d] < this.v[p]) ||
          (!n1.verificarPar() && !n2.verificarPar() && this.v[d] < this.v[p])
        ) {
          this.intercambiarElementos(d, p)
        }
      }
    }
  }

  segmentarPrimoYNoPrimo() {
    const n1 = new NEnt()
    const n2 = new NEnt()
    for (let p = 0; p < this.n - 1; p++) {
      for (let d = p + 1; d < this.n; d++) {
        n1.cargar(this.v[d])
        n2.cargar(this.v[p])
        if (
          (n1.verificarPrimos() && !n2.verificarPrimos()) ||
          (n1.verificarPrimos() &&
            n2.verificarPrimos() &&
            this.v[d] < this.v[p]) ||
          (!n1.verificarPrimos() &&
            !n2.verificarPrimos() &&
            this.v[d] < this.v[p])
        ) {
          this.intercambiarElementos(d, p)
        }
      }
    }
  }

  intercalarParYNoPar() {
    let b = true
    const n1 = new NEnt()
    const n2 = new NEnt()

    for (let p = 0; p < this.n - 1; p++) {
      if (b) {
        for (let d = p + 1; d < this.n; d++) {
          n1.cargar(this.v[d])
          n2.cargar(this.v[p])

          if (
            (n1.verificarPar() && !n2.verificarPar()) ||
            (n1.verificarPar() && n2.verificarPar() && this.v[d] < this.v[p]) ||
            (!n1.verificarPar() && !n2.verificarPar() && this.v[d] < this.v[p])
          ) {
            this.intercambiarElementos(d, p)
          }
        }
      } else {
        for (let d = p + 1; d < this.n; d++) {
          n1.cargar(this.v[d])
          n2.cargar(this.v[p])

          if (
            (!n1.verificarPar() && n2.verificarPar()) ||
            (!n1.verificarPar() &&
              !n2.verificarPar() &&
              this.v[d] < this.v[p]) ||
            (n1.verificarPar() && n2.verificarPar() && this.v[d] < this.v[p])
          ) {
            this.intercambiarElementos(d, p)
          }
        }
      }
      b = !b
    }
  }

  intercalarPrimoYNoPrimo() {
    let b = true
    const n1 = new NEnt()
    const n2 = new NEnt()

    for (let p = 0; p < this.n - 1; p++) {
      if (b) {
        for (let d = p + 1; d < this.n; d++) {
          n1.cargar(this.v[d])
          n2.cargar(this.v[p])

          if (
            (n1.verificarPrimos() && !n2.verificarPrimos()) ||
            (n1.verificarPrimos() &&
              n2.verificarPrimos() &&
              this.v[d] < this.v[p]) ||
            (!n1.verificarPrimos() &&
              !n2.verificarPrimos() &&
              this.v[d] < this.v[p])
          ) {
            this.intercambiarElementos(d, p)
          }
        }
      } else {
        for (let d = p + 1; d < this.n; d++) {
          n1.cargar(this.v[d])
          n2.cargar(this.v[p])
          n2.verificarPrimos()

          if (
            (!n1.verificarPrimos() && n2.verificarPrimos()) ||
            (!n1.verificarPrimos() &&
              !n2.verificarPrimos() &&
              this.v[d] < this.v[p]) ||
            (n1.verificarPrimos() &&
              n2.verificarPrimos() &&
              this.v[d] < this.v[p])
          ) {
            this.intercambiarElementos(d, p)
          }
        }
      }
      b = !b
    }
  }

  // Invierte el vector
  invertir() {
    let inicio = 0
    let fin = this.n - 1
    while (inicio < fin) {
      this.intercambiarElementos(inicio, fin)
      inicio++
      fin--
    }
  }

  // Cuenta los submúltiplos
  contarSubmultiplos() {
    let contador = 0

    for (let i = 0; i < this.n; i++) {
      if (this.v[i] % (i + 1) === 0) {
        contador++
      }
    }
    return contador
  }

  // Busca el elemento mayor de un vector
  buscarElementoMayor(indice) {
    let mayor = 0
    for (let i = 0; i < this.n; i++) {
      if (i % indice === 0 && mayor < this.v[i]) {
        mayor = this.v[i]
      }
    }
    return mayor
  }

  // Busca la media del vector
  buscarMedia(indice) {
    let suma = 0
    let contador = 0
    for (let i = 0; i < this.n; i++) {
      if (i % indice === 0) {
        suma += this.v[i]
        contador++
      }
    }
    return suma / contador
  }

  // Verifica si todos los elementos son iguales
  verificarElementosIguales() {
    const inicial = this.v[0]
    for (let i = 0; i < this.n; i++) {
      if (inicial !== this.v[i]) {
        return false
      }
    }
    return true
  }

  // Verifica si un segmento está ordenado de manera ascendente
  verificarSegmentoOrdenado(a, b) {
    for (let i = a; i < b; i++) {
      if (this.v[i] > this.v[i + 1]) {
        return false
      }
    }
    return true
  }

  // Inserta un vector en otro en una posición específica
  insertarVectorPorPosicion(v1, v2, posicion) {
    const n1 = v1.retornarDimension()
    const n2 = v2.retornarDimension()
    const vector1 = v1.retornarVector()
    const vector2 = v2.retornarVector()

    for (let i = 0; i < posicion; i++) {
      this.cargarElementoXElemento(vector1[i])
    }

    for (let i = 0; i < n2; i++) {
      this.cargarElementoXElemento(vector2[i])
    }

    for (let i = posicion; i < n1; i++) {
      this.cargarElementoXElemento(vector1[i])
    }
  }

  // Elimina los elementos de un vector indicando dos posiciones (rango)
  eliminarElementosDelVectorIndicandoLasPosiciones(a, b) {
    const copia = new Vector()

    for (let i = 0; i < this.n; i++) {
      if (i < a || i > b) {
        copia.cargarElementoXElemento(this.v[i])
      }
    }

    this.v = copia.v
    this.n = copia.n
  }

  // Duplica los elementos del vector
  duplicarElementos() {
    const copia = new Vector()

    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < 2; j++) {
        copia.cargarElementoXElemento(this.v[i])
      }
    }

    this.v = copia.v
    this.n = copia.n
  }

  // Concatena dos vectores
  concatenar(v1) {
    const n1 = v1.n
    for (let i = 0; i < n1; i++) {
      this.cargarElementoXElemento(v1.v[i])
    }
  }

  // Ordena los elementos de un segmento
  ordenarElementosDeUnSegmento(a, b) {
    const vector1 = new Vector()
    const vector2 = new Vector()
    const vector3 = new Vector()

    for (let i = 0; i < a; i++) {
      vector1.cargarElementoXElemento(this.v[i])
    }

    for (let i = a; i <= b; i++) {
      vector2.cargarElementoXElemento(this.v[i])
    }

    for (let i = b + 1; i < this.n; i++) {
      vector3.cargarElementoXElemento(this.v[i])
    }

    vector2.ordenamientoBurbujaAscendente()

    vector1.concatenar(vector2)
    vector1.concatenar(vector3)

    this.v = vector1.v
    this.n = vector1.n
  }

  // Busca el elemento menos repetido de un vector
  buscarElementoMenosRepetido() {
    let leastFrequentNumber = 0
    let minCount = this.n + 1

    const vector = [...this.v]

    for (let i = 0; i < this.n; i++) {
      let count = 0
      const currentNumber = vector[i]

      if (currentNumber === Number.MIN_VALUE) {
        continue
      }

      for (let j = i; j < this.n; j++) {
        if (vector[j] === currentNumber) {
          count++
          vector[j] = Number.MIN_VALUE
        }
      }

      if (count < minCount) {
        minCount = count
        leastFrequentNumber = currentNumber
      }
    }

    return leastFrequentNumber
  }

  // Encuentra el elemento menos repetido entre un segmento
  encontrarElementoMenosRepetidoEntreUnSegmento(a, b) {
    const vector1 = new Vector()

    for (let i = a; i <= b; i++) {
      vector1.cargarElementoXElemento(this.v[i])
    }

    const menosRepetido = vector1.buscarElementoMenosRepetido()

    return menosRepetido
  }

  // Carga en un vector la frecuencia de cómo aparece un número
  cargarFrecuencia(v3, v2) {
    for (let i = 0; i < v2.n; i++) {
      v3.cargarElementoXElemento(this.frecuencia(v2.v[i]))
    }
  }

  // Encuentra la frecuencia de distribución de un segmento
  encontrarLaFrecuenciaDeDistribucionEntreUnSegmento(a, b, v2, v3) {
    const v1 = new Vector()

    for (let i = a; i <= b; i++) {
      v1.cargarElementoXElemento(this.v[i])
    }

    v1.ordenamientoBurbujaAscendente()

    for (let i = 0; i < v1.n; i++) {
      v2.cargarElementoXElemento(v1.v[i])
    }

    v2.eliminarDuplicados()

    v1.cargarFrecuencia(v3, v2)
  }

  // Cuenta los números que son capicúas en un vector
  contarCapicuas() {
    let contarCapicuas = 0
    const n1 = new NEnt()

    for (let i = 0; i < this.n; i++) {
      n1.cargar(this.v[i])
      if (!n1.verificarCapicua()) {
        break
      }

      contarCapicuas++
    }
    return contarCapicuas
  }

  // Cuenta los números que no son capicúas en un vector
  contarNoCapicuas() {
    let contarNoCapicuas = 0
    const n1 = new NEnt()

    for (let i = 0; i < this.n; i++) {
      n1.cargar(this.v[i])
      if (n1.verificarCapicua()) {
        break
      }

      contarNoCapicuas++
    }
    return contarNoCapicuas
  }

  // Segmenta un vector en capicúas ascendentes y no capicúas descendentes
  segmentarCapicuaYNoCapicua() {
    const n1 = new NEnt()
    const n2 = new NEnt()
    for (let p = 0; p < this.n - 1; p++) {
      for (let d = p + 1; d < this.n; d++) {
        n1.cargar(this.v[d])
        n2.cargar(this.v[p])
        if (
          (n1.verificarCapicua() && !n2.verificarCapicua()) ||
          (n1.verificarCapicua() &&
            n2.verificarCapicua() &&
            this.v[d] < this.v[p]) ||
          (!n1.verificarCapicua() &&
            !n2.verificarCapicua() &&
            this.v[d] < this.v[p])
        ) {
          this.intercambiarElementos(d, p)
        }
      }
    }

    const capicuas = this.contarCapicuas()

    const v1 = new Vector()
    const v2 = new Vector()
    for (let i = 0; i < capicuas; i++) {
      v1.cargarElementoXElemento(this.v[i])
    }

    for (let i = capicuas; i < this.n; i++) {
      v2.cargarElementoXElemento(this.v[i])
    }

    v1.ordenamientoBurbujaAscendente()
    v2.ordenamientoBurbujaDescendente()

    v1.concatenar(v2)

    this.v = v1.v
    this.n = v1.n
  }

  // Intercala primos y no primos de un segmento
  intercalarPrimoYNoPrimoDeUnSegmento(a, b) {
    const vector1 = new Vector()
    const vector2 = new Vector()
    const vector3 = new Vector()

    for (let i = 0; i < a; i++) {
      vector1.cargarElementoXElemento(this.v[i])
    }

    for (let i = a; i <= b; i++) {
      vector2.cargarElementoXElemento(this.v[i])
    }

    for (let i = b + 1; i < this.n; i++) {
      vector3.cargarElementoXElemento(this.v[i])
    }

    vector2.ordenamientoBurbujaAscendente()
    vector2.intercalarPrimoYNoPrimo()

    vector1.concatenar(vector2)
    vector1.concatenar(vector3)

    this.v = vector1.v
    this.n = vector1.n
  }
}
