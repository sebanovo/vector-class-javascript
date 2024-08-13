# Trabajo de la Universidad: Clase Vector en JavaScript

Este proyecto representa un trabajo académico de la universidad en el que desarrollamos una clase Vector en JavaScript. Esta clase permite realizar cálculos matemáticos utilizando un array como base y está diseñada para llevar a cabo una variedad de operaciones matemáticas.

Visita el proyecto [Clase-Vector](https://vector-class-javascript.vercel.app/)

<div align="center">
  <img src="https://i.ibb.co/ZHf6HTz/clase-vector.png" alt="vector-class-javascript">
</div>

## Características

La clase Vector en JavaScript incluye las siguientes características y operaciones:

- **Creación de Vectores:** Puedes crear un nuevo objeto Vector vacío e ir cargándolo con elementos, o cargarlo con valores aleatorios en un rango específico.
  
- **Selección de Elementos:** La clase ofrece métodos para seleccionar elementos específicos basados en ciertos criterios, como primos, no primos, buenos valores, etc.

- **Operaciones Matemáticas:** Incluye operaciones matemáticas comunes como suma, resta, producto escalar, magnitud, producto cruz y más.

- **Ordenamiento:** Puedes ordenar el vector tanto de forma ascendente como descendente utilizando varios algoritmos, como el ordenamiento por intercambio y el ordenamiento burbuja.

- **Búsquedas:** Ofrece búsquedas binarias y secuenciales para encontrar elementos específicos en el vector.

- **Operaciones de Conjuntos:** Permite realizar operaciones de conjuntos como intersección, unión y diferencia entre conjuntos representados por vectores.

- **Eliminación de Duplicados:** Puedes eliminar duplicados del vector.

## Metodos de la Clase Vector

- Cargar elemento x elemento
- Cargar
- Descargar
- Cargar serie aritmética
- Cargar serie Fibonacci
- Seleccionar por posición
- Seleccionar primos
- Seleccionar no primos
- Seleccionar buenos
- Promedio
- Máximo
- Frecuencia
- Desviación media
- Desviación estándar
- Búsqueda binaria
- Búsqueda secuencial
- Ordenamiento ascendente
- Ordenamiento descendente
- Unión de conjuntos
- Intersección de conjuntos
- Diferencia de conjuntos A-B
- Diferencia de conjuntos B-A
- Invertir
- Contar elementos de las posiciones submúltiplos
- Buscar elemento mayor de las posiciones múltiplos
- Buscar la media de las posiciones múltiplos
- Verificar si todos los elementos son iguales
- Verificar si el segmento está ordenado
- Insertar vector2 en 1 respecto a una posición
- Eliminar elementos de un segmento
- Duplicar elementos
- Ordenar elementos de un segmento
- Encontrar elemento menos repetido de un segmento
- Encontrar la frecuencia de distribución de un segmento
- Intercalar primos y no primos
- Segmentar par y no par
- Segmentar primos y no primos
- Segmentar capicuas y no capicuas
- Intercalar par y no par
- Intercalar primo y no primo

## Ejemplo: 

```JavaScript
class Vector {
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

  descargar(){
    let s = ''
    for(let i = 0 ; i<this.n; i++){
      s = s + this.v[i] + ' | '
    }
    return s;
  }

  //etc...
}
```

La Clase Vector se apoya de una clase NEnt (numero entero) para funcionar

1. **Clonar el Repositorio**:
   
      Asegúrate de tener Node.js instalado antes de continuar con los siguientes pasos.

      Abre una terminal y ejecuta el siguiente comando para clonar el repositorio de GitHub:

      ```bash
      git clone https://github.com/sebanovo/vector-class-javascript.git
      ```

2. **Instalar Dependencias**:

      ```bash
      cd vector-class-javascript
      ```

      ```bash
      npm install
      ```

3. **Iniciar el Servidor de Desarrollo**:

      Inicia el servidor de desarrollo Vite:

      ```bash
      npm run dev
      ```

      Ahora, el proyecto Vite.js debería estar en funcionamiento y accesible en tu navegador en el pueto indicado.

4. **Crear una Pull Request (Opcional)**:

      Si cuentas con las ganas de seguir aportando a este proyecto puedes realizar una pull request y mandarme tu trabajo y seguir mejorando este repositorio

      - Haz cambios en tu código y confirma tus modificaciones localmente.
      - Luego, crea una nueva rama (branch) para tu pull request.
      - Sube tu rama a tu repositorio remoto.
      - Visita el repositorio en GitHub y selecciona la opción "New Pull Request".
      - Sigue las instrucciones en pantalla para crear tu pull request.

   ¡Esperamos que este repositorio te sea de ayuda!
