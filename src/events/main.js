import Vector from '../class/Vector.js'
import * as All from '../components.js'

const Element = All.botones

const { textBox1, textBox2, textBox3 } = Element

let v1 = new Vector()
let v2 = new Vector()
let v3 = new Vector()

Element.botonCargar.addEventListener('click', () => {
  const numeroDeElementos = document.getElementById('N°Elementos').value
  const valorInicial = document.getElementById('Inicio').value
  const valorFinal = document.getElementById('Final').value

  v1.cargar(
    parseInt(numeroDeElementos),
    parseInt(valorInicial),
    parseInt(valorFinal)
  )
})

Element.botonCargarElementoXElemento.addEventListener('click', () => {
  v1 = new Vector()
  const numeroDeElementos = parseInt(
    prompt('Ingrese la cantidad de Elementos: ')
  )
  for (let i = 0; i < numeroDeElementos; i++) {
    const elemento = parseInt(prompt(`Ingrese el Elemento ${i + 1} :`))
    v1.cargarElementoXElemento(elemento)
  }
})

Element.botonDescargar.addEventListener('click', () => {
  textBox1.value = v1.descargar()
})

Element.botonCargarSerieAritmetica.addEventListener('click', () => {
  const numeroDeElementos = parseInt(
    prompt('Ingrese la cantidad de Elementos: ')
  )
  const valorInicial = parseInt(prompt('Valor Inicial: '))
  const razon = parseInt(prompt('Valor de la razón: '))
  v1.cargarSerieAritmetica(numeroDeElementos, valorInicial, razon)
})

Element.botonCargarSerieFibonacci.addEventListener('click', () => {
  v1 = new Vector()
  const numeroDeElementos = parseInt(
    prompt('Ingrese la cantidad de Elementos: ')
  )
  v1.cargarSerieFibonacci(numeroDeElementos)
})

Element.botonSeleccionarPorPosicion.addEventListener('click', () => {
  v2 = new Vector()
  const intervalo = parseInt(prompt('Introduzca el intervalo'))
  v1.seleccionarPorPosicion(intervalo, v2)
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
  alert(`El promedio es: ${v1.promedio()}`)
})

Element.botonMaximo.addEventListener('click', () => {
  alert(`El maximo es: ${v1.maximo()}`)
})

Element.botonFrecuencia.addEventListener('click', () => {
  const valorMaximo = parseInt(document.getElementById('Final').value)
  alert(`La frecuencia del maximo es: ${v1.frecuencia(valorMaximo)}`)
})

Element.botonMaximoYFrecuencia.addEventListener('click', () => {
  const MaximoYFrecuencia = {
    maximo: 1,
    frecuencia: 0
  }
  v1.maximoYfrecuencia(MaximoYFrecuencia)
  alert(
    `Maximo: ${MaximoYFrecuencia.maximo} frecuencia: ${MaximoYFrecuencia.frecuencia}`
  )
})

Element.botonDesviacionMedia.addEventListener('click', () => {
  // Agrega la lógica para el evento de DesviacionMedia aquí
  alert(`La desviacion media es: ${v1.desviacionMedia()}`)
})

Element.botonDesviacionEstandar.addEventListener('click', () => {
  alert(`La desviacion estandar es: ${v1.desviacionEstandar()}`)
})

Element.botonBusquedaBinaria.addEventListener('click', () => {
  const valorBuscado = parseInt(prompt('Introduzca el valor a buscar: '))
  const isEncontrado = v1.busquedaBinaria(valorBuscado)
  if (isEncontrado) { alert(`El valor ${valorBuscado} SI se encuentra en el vector`) } else alert(`El valor ${valorBuscado} NO se encuentra en el vector`)
})

Element.botonBusquedaSecuencial.addEventListener('click', () => {
  const valorBuscado = parseInt(prompt('Introduzca el valor a buscar: '))
  const isEncontrado = v1.busquedaSecuencial(valorBuscado)
  if (isEncontrado) { alert(`El valor ${valorBuscado} SI se encuentra en el vector`) } else alert(`El valor ${valorBuscado} NO se encuentra en el vector`)
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
  console.log('Hola')
  v3.diferenciaDeConjuntosBA(v1, v2)
  textBox3.value = v3.descargar()
})

/** ****************** v2 **********************/
Element.botonCargarV2.addEventListener('click', () => {
  const numeroDeElementos = document.getElementById('N°Elementos').value
  const valorInicial = document.getElementById('Inicio').value
  const valorFinal = document.getElementById('Final').value

  v2.cargar(
    parseInt(numeroDeElementos),
    parseInt(valorInicial),
    parseInt(valorFinal)
  )
})

Element.botonCargarElementoXElementoV2.addEventListener('click', () => {
  v2 = new Vector()
  const numeroDeElementos = parseInt(
    prompt('Ingrese la cantidad de Elementos: ')
  )
  for (let i = 0; i < numeroDeElementos; i++) {
    const elemento = parseInt(prompt(`Ingrese el Elemento ${i + 1} :`))
    v2.cargarElementoXElemento(elemento)
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

Element.botonInvertir.addEventListener('click', () => {
  v1.invertir()
  textBox2.value = v1.descargar()
})

Element.botonContarElementosDeLasPosicionesSubmultiplos.addEventListener(
  'click',
  () => {
    alert(`El número de submultiplos es: ${v1.contarSubmultiplos()}"`)
  }
)

Element.botonBuscarElementoMayorDeLasPosicionesMultiplos.addEventListener(
  'click',
  () => {
    const indice = parseInt(
      prompt('BUSCAR ELEMENTO MAYOR\nDeme un multiplo para las posiciones:')
    )
    alert(
      `El elemento mayor del vector de las posiciones multiplos de ${indice} es: ${v1.buscarElementoMayor(
        indice
      )}`
    )
  }
)

Element.botonBuscarLaMediaDeLasPosicionesMultiplos.addEventListener('click', () => {
  const indice = parseInt(
    prompt('BUSCAR LA MEDIA\nDeme un multiplo para las posiciones:')
  )
  alert(
    `La media del vector de las posiciones multiplos de ${indice} es: ${v1.buscarMedia(
      indice
    )}`
  )
})

Element.botonVerificarSiTodosLosElementosSonIguales.addEventListener('click', () => {
  const booleano = v1.verificarElementosIguales()
  if (booleano) {
    alert(`${booleano} - Elementos De V1 Iguales`)
  } else {
    alert(`${booleano} - Elementos De V1 No Iguales`)
  }
})

Element.botonVerificarSiElSegmentoEstaOrdenado.addEventListener('click', () => {
  const a = parseInt('Introduzca el primer limite:')
  const b = parseInt('Introduza el segundo limite')
  if (
    a < 0 ||
    b < 0 ||
    a > v1.retornarDimension() ||
    b > v1.retornarDimension()
  ) {
    alert('Indice fuera de los limites')
  } else {
    alert(v1.verificarSegmentoOrdenado(a, b))
  }
})

Element.botonInsertarVector2En1RespectoAUnaPosicion.addEventListener('click', () => {
  v3 = new Vector()
  const posicion = parseInt(prompt('Introduce el indice'))
  if (v1.retornarDimension() < 0 || v2.retornarDimension() < 0) {
    alert('Tienes que cargar el Vector v1 y el v2')
  } else if (posicion < 0 || posicion > v1.retornarDimension()) {
    alert('Indice fuera de los limites')
  } else {
    v3.insertarVectorPorPosicion(v1, v2, posicion)
    textBox3.value = v3.descargar()
  }
})

Element.botonEliminarElementosDeUnSegmento.addEventListener('click', () => {
  const a = parseInt(prompt('Introduzca el primer limte'))
  const b = parseInt(prompt('Introduzca el segundo limte'))
  if (
    a < 0 ||
    b < 0 ||
    a > v1.retornarDimension() ||
    b > v1.retornarDimension()
  ) {
    alert('Indice fuera de los limites')
  } else {
    v1.eliminarElementosDelVectorIndicandoLasPosiciones(a, b)
    textBox2.value = v1.descargar()
  }
})

Element.botonDuplicarElementos.addEventListener('click', () => {
  v1.duplicarElementos()
  textBox2.value = v1.descargar()
})

Element.botonOrdenarElementosDeUnSegmento.addEventListener('click', () => {
  const a = parseInt(prompt('Introduzca el primer limte'))
  const b = parseInt(prompt('Introduzca el segundo limte'))
  if (
    a < 0 ||
    b < 0 ||
    a > v1.retornarDimension() ||
    b > v1.retornarDimension()
  ) {
    alert('Indice fuera de los limites')
  } else {
    v1.ordenarElementosDeUnSegmento(a, b)
    textBox2.value = v1.descargar()
  }
})

Element.botonEncontrarElementoMenosRepetidoDeUnSegmento.addEventListener(
  'click',
  () => {
    const a = parseInt(prompt('Introduzca el primer limte'))
    const b = parseInt(prompt('Introduzca el segundo limte'))
    if (
      a < 0 ||
      b < 0 ||
      a > v1.retornarDimension() ||
      b > v1.retornarDimension()
    ) {
      alert('Indice fuera de los limites')
    } else {
      const elementoMenosRepetido =
        v1.encontrarElementoMenosRepetidoEntreUnSegmento(a, b)
      alert(`El elemento menos repetido es: ${elementoMenosRepetido}`)
    }
  }
)

Element.botonEncontrarLaFrecuenciaDeDistribucionDeUnSegmento.addEventListener(
  'click',
  () => {
    const a = parseInt(prompt('Introduzca el primer limte'))
    const b = parseInt(prompt('Introduzca el segundo limte'))
    if (
      a < 0 ||
      b < 0 ||
      a > v1.retornarDimension() ||
      b > v1.retornarDimension()
    ) {
      alert('Indice fuera de los limites')
    } else {
      v2 = new Vector()
      v3 = new Vector()
      v1.encontrarLaFrecuenciaDeDistribucionEntreUnSegmento(a, b, v2, v3)
      textBox2.value = v2.descargar()
      textBox3.value = v3.descargar()
    }
  }
)

Element.botonIntercalarPrimosYNoPrimos.addEventListener('click', () => {
  const a = parseInt(prompt('Introduzca el primer limte'))
  const b = parseInt(prompt('Introduzca el segundo limte'))
  if (
    a < 0 ||
    b < 0 ||
    a > v1.retornarDimension() ||
    b > v1.retornarDimension()
  ) {
    alert('Indice fuera de los limites')
  } else {
    v1.intercalarPrimoYNoPrimo(a, b)
    textBox2.value = v1.descargar()
  }
})

/** ****************** v3 **********************/
Element.botonCargarV3.addEventListener('click', () => {
  const numeroDeElementos = document.getElementById('N°Elementos').value
  const valorInicial = document.getElementById('Inicio').value
  const valorFinal = document.getElementById('Final').value

  v3.cargar(
    parseInt(numeroDeElementos),
    parseInt(valorInicial),
    parseInt(valorFinal)
  )
})

Element.botonCargarElementoXElementoV2.addEventListener('click', () => {
  v3 = new Vector()
  const numeroDeElementos = parseInt(
    prompt('Ingrese la cantidad de Elementos: ')
  )
  for (let i = 0; i < numeroDeElementos; i++) {
    const elemento = parseInt(prompt(`Ingrese el Elemento ${i + 1} :`))
    v3.cargarElementoXElemento(elemento)
  }
})

Element.botonDescargarV3.addEventListener('click', () => {
  textBox3.value = v3.descargar()
})
