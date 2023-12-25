import { Vector } from 'utilities-library'

import { check, confirDelete, messageSwal, promptSwal } from './alertSwal.js'
import { Element } from './components.js'

const { textBox1, textBox2, textBox3 } = Element

let v1 = new Vector()
let v2 = new Vector()
let v3 = new Vector()

Element.botonCargar.addEventListener('click', () => {
  const numeroDeElementos = document.getElementById('N°Elementos').value
  const valorInicial = document.getElementById('Inicio').value
  const valorFinal = document.getElementById('Final').value

  v1 = new Vector()

  v1.cargar(
    parseInt(numeroDeElementos),
    parseInt(valorInicial),
    parseInt(valorFinal)
  )
})

Element.botonCargarElementoXElemento.addEventListener('click', async () => {
  let result = await promptSwal('Cantidad de elementos')
  if (!result.isConfirmed) return
  const nroElementos = parseInt(result.value)
  let i = 0
  let bool = true
  v1 = new Vector()
  while (i < nroElementos && bool) {
    result = await promptSwal(`${i + 1}`)
    if (result.isConfirmed) {
      v1.cargarElementoXElemento(parseInt(result.value))
    } else {
      console.log('cancelado')
      bool = false
    }
    i++
  }
})

Element.botonDescargar.addEventListener('click', () => {
  textBox1.value = v1.descargar()
})

Element.botonCargarSerieAritmetica.addEventListener('click', async () => {
  v1 = new Vector()

  let result = await promptSwal('Numero De Elementos')
  if (!result.isConfirmed) return
  const nroElementos = parseInt(result.value)
  result = await promptSwal('Primer Elemento')
  if (!result.isConfirmed) return
  const valorInicial = parseInt(result.value)
  result = await promptSwal('Razón')
  if (!result.isConfirmed) return
  const razon = parseInt(result.value)
  v1.cargarSerieAritmetica(nroElementos, valorInicial, razon)
})

Element.botonCargarSerieFibonacci.addEventListener('click', async () => {
  v1 = new Vector()

  const result = await promptSwal('Cantidad de elementos')
  if (!result.isConfirmed) return
  v1.cargarSerieFibonacci(Number(result.value))
})

Element.botonSeleccionarPorPosicion.addEventListener('click', async () => {
  v2 = new Vector()
  const result = await promptSwal('Cantidad de elementos')
  if (!result.isConfirmed) return
  v1.seleccionarPorPosicion(Number(result.value))
})

Element.botonSeleccionarPrimos.addEventListener('click', () => {
  v2 = new Vector()
  v1.seleccionarPrimos(v2)
  textBox2.value = v2.descargar()
})
Element.botonSeleccionarNoPrimos.addEventListener('click', () => {
  v3 = new Vector()
  v1.seleccionarNoPrimos(v3)
  textBox3.value = v3.descargar()
})

Element.botonSeleccionarBuenos.addEventListener('click', () => {
  v2 = new Vector()
  v1.seleccionarBuenos(v2)
  textBox2.value = v2.descargar()
})

Element.botonPromedio.addEventListener('click', () => {
  messageSwal(`El promedio es: ${v1.promedio()}`)
})

Element.botonMaximo.addEventListener('click', () => {
  messageSwal(`El maximo es: ${v1.maximo()}`)
})

Element.botonFrecuencia.addEventListener('click', () => {
  const valorMaximo = parseInt(document.getElementById('Final').value)
  messageSwal(`La frecuencia del maximo es: ${v1.frecuencia(valorMaximo)}`)
})

Element.botonMaximoYFrecuencia.addEventListener('click', () => {
  const MaximoYFrecuencia = {
    maximo: 1,
    frecuencia: 0
  }
  v1.maximoYfrecuencia(MaximoYFrecuencia)
  messageSwal(
    `Maximo: ${MaximoYFrecuencia.maximo} frecuencia: ${MaximoYFrecuencia.frecuencia}`
  )
})

Element.botonDesviacionMedia.addEventListener('click', () => {
  // Agrega la lógica para el evento de DesviacionMedia aquí
  messageSwal(`La desviacion media es: ${v1.desviacionMedia()}`)
})

Element.botonDesviacionEstandar.addEventListener('click', () => {
  messageSwal(`La desviacion estandar es: ${v1.desviacionEstandar()}`)
})

Element.botonBusquedaBinaria.addEventListener('click', async () => {
  const result = await promptSwal('Introduzca el valor a buscar')
  if (!result.isConfirmed) return
  const valorBuscado = Number(result.value)
  const isEncontrado = v1.busquedaBinaria(valorBuscado)
  if (isEncontrado) {
    messageSwal(`El valor ${valorBuscado} SI se encuentra en el vector`)
  } else messageSwal(`El valor ${valorBuscado} NO se encuentra en el vector`)
})

Element.botonBusquedaSecuencial.addEventListener('click', async () => {
  const result = await promptSwal('Introduzca el valor a buscar')
  if (!result.isConfirmed) return
  const valorBuscado = Number(result.value)
  const isEncontrado = v1.busquedaSecuencial(valorBuscado)
  if (isEncontrado) {
    messageSwal(`El valor ${valorBuscado} SI se encuentra en el vector`)
  } else messageSwal(`El valor ${valorBuscado} NO se encuentra en el vector`)
})

Element.botonOrdenamientoAscendente.addEventListener('click', () => {
  v1.ordenamientoPorIntercambioAscendente()
  textBox2.value = v1.descargar()
})

Element.botonOrdenamientoDescendente.addEventListener('click', () => {
  v1.ordenamientoPorIntercambioDescendente()
  textBox2.value = v1.descargar()
})

Element.botonUnionDeConjuntos.addEventListener('click', () => {
  v3 = new Vector()
  v3.unionDeConjuntos(v1, v2)
  textBox3.value = v3.descargar()
})

Element.botonInterseccionDeConjuntos.addEventListener('click', () => {
  v3 = new Vector()
  v3.interseccionDeConjuntos(v1, v2)
  textBox3.value = v3.descargar()
})

Element.botonDiferenciaDeConjuntosAB.addEventListener('click', () => {
  v3 = new Vector()
  v3.diferenciaDeConjuntosAB(v1, v2)
  textBox3.value = v3.descargar()
})

Element.botonDiferenciaDeConjuntosBA.addEventListener('click', () => {
  v3 = new Vector()
  v3.diferenciaDeConjuntosBA(v1, v2)
  textBox3.value = v3.descargar()
})

Element.botonInvertir.addEventListener('click', () => {
  v1.invertir()
  textBox2.value = v1.descargar()
})

Element.botonContarElementosDeLasPosicionesSubmultiplos.addEventListener(
  'click',
  () => {
    messageSwal(`El número de submultiplos es: ${v1.contarSubmultiplos()}"`)
  }
)

Element.botonBuscarElementoMayorDeLasPosicionesMultiplos.addEventListener(
  'click',
  async () => {
    const result = await promptSwal('Deme un multiplo para las posiciones:')
    const indice = Number(result.value)
    messageSwal(
      `El elemento mayor del vector de las posiciones multiplos de ${indice} es: ${v1.buscarElementoMayor(
        indice
      )}`
    )
  }
)

Element.botonBuscarLaMediaDeLasPosicionesMultiplos.addEventListener(
  'click',
  async () => {
    const result = await promptSwal('deme un multiplo para las posiciones:')
    const indice = Number(result.value)
    messageSwal(
      `La media del vector de las posiciones multiplos de ${indice} es: ${v1.buscarMedia(
        indice
      )}`
    )
  }
)

Element.botonVerificarSiTodosLosElementosSonIguales.addEventListener(
  'click',
  () => {
    const booleano = v1.verificarElementosIguales()
    if (booleano) {
      messageSwal(`${booleano} - Elementos De V1 Iguales`)
    } else {
      messageSwal(`${booleano} - Elementos De V1 No Iguales`)
    }
  }
)

Element.botonVerificarSiElSegmentoEstaOrdenado.addEventListener('click', () => {
  const a = parseInt('Introduzca el primer limite:')
  const b = parseInt('Introduza el segundo limite')
  if (
    a < 0 ||
    b < 0 ||
    a > v1.retornarDimension() ||
    b > v1.retornarDimension()
  ) {
    messageSwal('Indice fuera de los limites')
  } else {
    messageSwal(`${v1.verificarSegmentoOrdenado(a, b)}`)
  }
})

Element.botonInsertarVector2En1RespectoAUnaPosicion.addEventListener(
  'click',
  async () => {
    v3 = new Vector()
    const result = await promptSwal('Introduce el indice')
    const posicion = Number(result.value)

    if (v1.retornarDimension() < 0 || v2.retornarDimension() < 0) {
      messageSwal('Tienes que cargar el Vector v1 y el v2')
    } else if (posicion < 0 || posicion > v1.retornarDimension()) {
      messageSwal('Indice fuera de los limites')
    } else {
      v3.insertarVectorPorPosicion(v1, v2, posicion)
      textBox3.value = v3.descargar()
    }
  }
)

Element.botonEliminarElementosDeUnSegmento.addEventListener(
  'click',
  async () => {
    const result1 = await promptSwal('Introduzca el primer limte')
    const result2 = await promptSwal('Introduzca el segundo limite')
    const a = Number(result1.value)
    const b = Number(result2.value)
    if (
      a < 0 ||
      b < 0 ||
      a > v1.retornarDimension() ||
      b > v1.retornarDimension()
    ) {
      messageSwal('Indice fuera de los limites')
    } else {
      v1.eliminarElementosDelVectorIndicandoLasPosiciones(a, b)
      textBox2.value = v1.descargar()
    }
  }
)

Element.botonDuplicarElementos.addEventListener('click', () => {
  v1.duplicarElementos()
  textBox2.value = v1.descargar()
})

Element.botonOrdenarElementosDeUnSegmento.addEventListener(
  'click',
  async () => {
    const result1 = await promptSwal('Introduzca el primer limte')
    const result2 = await promptSwal('Introduzca el segundo limite')
    const a = Number(result1.value)
    const b = Number(result2.value)
    if (
      a < 0 ||
      b < 0 ||
      a > v1.retornarDimension() ||
      b > v1.retornarDimension()
    ) {
      messageSwal('Indice fuera de los limites')
    } else {
      v1.ordenarElementosDeUnSegmento(a, b)
      textBox2.value = v1.descargar()
    }
  }
)

Element.botonEncontrarElementoMenosRepetidoDeUnSegmento.addEventListener(
  'click',
  async () => {
    const result1 = await promptSwal('Introduzca el primer limte')
    const result2 = await promptSwal('Introduzca el segundo limite')
    const a = Number(result1.value)
    const b = Number(result2.value)
    if (
      a < 0 ||
      b < 0 ||
      a > v1.retornarDimension() ||
      b > v1.retornarDimension()
    ) {
      messageSwal('Indice fuera de los limites')
    } else {
      v1.encontrarElementoMenosRepetidoEntreUnSegmento(a, b)
      messageSwal(
        `El elemento menos repetido es: ${v1.encontrarElementoMenosRepetidoEntreUnSegmento(
          a,
          b
        )}`
      )
    }
  }
)

Element.botonEncontrarLaFrecuenciaDeDistribucionDeUnSegmento.addEventListener(
  'click',
  async () => {
    const result1 = await promptSwal('Introduzca el primer limte')
    const result2 = await promptSwal('Introduzca el segundo limite')
    const a = Number(result1.value)
    const b = Number(result2.value)
    if (
      a < 0 ||
      b < 0 ||
      a > v1.retornarDimension() ||
      b > v1.retornarDimension()
    ) {
      messageSwal('Indice fuera de los limites')
    } else {
      v2 = new Vector()
      v3 = new Vector()
      v1.encontrarLaFrecuenciaDeDistribucioIntegerreUnSegmento(a, b, v2, v3)
      textBox2.value = v2.descargar()
      textBox3.value = v3.descargar()
    }
  }
)

Element.botonIntercalarPrimosYNoPrimos.addEventListener('click', async () => {
  const result1 = await promptSwal('Introduzca el primer limte')
  const result2 = await promptSwal('Introduzca el segundo limite')
  const a = Number(result1.value)
  const b = Number(result2.value)
  if (
    a < 0 ||
    b < 0 ||
    a > v1.retornarDimension() ||
    b > v1.retornarDimension()
  ) {
    messageSwal('Indice fuera de los limites')
  } else {
    v1.intercalarPrimoYNoPrimoDeUnSegmento(a, b)
    textBox2.value = v1.descargar()
  }
})
/** ****************** v2 **********************/
Element.botonCargarV2.addEventListener('click', () => {
  const numeroDeElementos = document.getElementById('N°Elementos').value
  const valorInicial = document.getElementById('Inicio').value
  const valorFinal = document.getElementById('Final').value

  v2 = new Vector()

  v2.cargar(
    parseInt(numeroDeElementos),
    parseInt(valorInicial),
    parseInt(valorFinal)
  )
})

Element.botonCargarElementoXElementoV2.addEventListener('click', async () => {
  let result = await promptSwal('Cantidad de elementos')
  if (!result.isConfirmed) return
  const nroElementos = parseInt(result.value)

  let i = 0
  let bool = true
  v2 = new Vector()
  while (i < nroElementos && bool) {
    result = await promptSwal(`${i + 1}`)
    if (result.isConfirmed) {
      v2.cargarElementoXElemento(parseInt(result.value))
    } else {
      console.log('cancelado')
      bool = false
    }
    i++
  }
})

Element.botonDescargarV2.addEventListener('click', () => {
  textBox2.value = v2.descargar()
})

Element.botonSegmentarParYNoParV2.addEventListener('click', () => {
  v2.segmentarParYNoPar()
  textBox3.value = v2.descargar()
})

Element.botonSegmentarPrimosYNoPrimosV2.addEventListener('click', () => {
  v2.segmentarPrimoYNoPrimo()
  textBox3.value = v2.descargar()
})

Element.botonSegmentarCapicuasYNoCapicuasV2.addEventListener('click', () => {
  v2.segmentarCapicuaYNoCapicua()
  textBox3.value = v2.descargar()
})

Element.botonIntercalarParYNoParV2.addEventListener('click', () => {
  v2.intercalarParYNoPar()
  textBox3.value = v2.descargar()
})

Element.botonIntercalarPrimoYNoPrimoV2.addEventListener('click', () => {
  v2.intercalarPrimoYNoPrimo()
  textBox3.value = v2.descargar()
})

/** ****************** v3 **********************/
Element.botonCargarV3.addEventListener('click', () => {
  const numeroDeElementos = document.getElementById('N°Elementos').value
  const valorInicial = document.getElementById('Inicio').value
  const valorFinal = document.getElementById('Final').value

  v3 = new Vector()

  v3.cargar(
    parseInt(numeroDeElementos),
    parseInt(valorInicial),
    parseInt(valorFinal)
  )
})

Element.botonCargarElementoXElementoV3.addEventListener('click', async () => {
  let result = await promptSwal('Cantidad de elementos')
  if (!result.isConfirmed) return
  const nroElementos = parseInt(result.value)
  let i = 0
  let bool = true
  v3 = new Vector()
  while (i < nroElementos && bool) {
    result = await promptSwal(`${i + 1}`)

    if (result.isConfirmed) {
      v3.cargarElementoXElemento(parseInt(result.value))
    } else {
      console.log('cancelado')
      bool = false
    }
    i++
  }
})

Element.botonDescargarV3.addEventListener('click', () => {
  textBox3.value = v3.descargar()
})

// Boton de reinicio rapido
Element.botonReset.addEventListener('click', async () => {
  const result = await confirDelete()
  if (result.isConfirmed) {
    v1 = new Vector()
    v2 = new Vector()
    v3 = new Vector()
    textBox1.value = ''
    textBox2.value = ''
    textBox3.value = ''
    check({
      title: 'Reiniciado',
      text: 'Se han reiniciado los objetos y los textbox',
      icon: 'success'
    })
  }
})
