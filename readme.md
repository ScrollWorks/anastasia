# Ejercicios de Rubencito

## Instrucciones
Para empezar, clona el repositorio y ejecuta `npm install`. 
Después, escribe el código para las funciones según explico aquí debajo, y cuando creas que has terminado, ejecuta `npm test` para comprobar si tus funciones pasan los tests. 

No modifiques los archivos `.test.js`, son los tests para verificar que tus funciones hacen lo que deben.

## Ejercicios 
### 1. - CuentaLetras
Crea una función que recibe un string como parámetro y que devuelva un objeto que contenga una propiedad para cada una de las distintas letras que aparecen en la frase, y cuyo valor sea el número de apariciones de cada letra.

Por ejemplo
`cuentaLetras("aaaaaxyxy")` debería de devolver un objeto así: `{a:5, x: 2, y: 2}`

Hazlo en el fichero `cuentaLetras.js`, dentro de la función `cuentaLetras` que ya está definida en ese archivo. Tienes que añadirle los parámetros que necesite y el código.

No elimines ni modifiques esta línea, ya que es necesaria para los tests `module.exports = cuentaLetras;`

### 2. - ExtiendeObjetos
Crea una función que recibe como parámetros un objeto cualquiera y un array de objetos como este: `[{nombre: 'XXX', valor: 'YYY'}, {nombre: 'zz', valor: 'hh'}]` y que añade al objeto del primer parámetro las propiedades especificadas en el segundo parámetro. 

Es decir, si tenemos un objeto `obj = {prop1: "valor1", prop2: "valor2"}` y llamamos a nuestra función de la siguiente manera: `extiendeObjetos(obj, [{nombre: 'XXX', valor: 'YYY'}, {nombre: 'zz', valor: 'hh'}]`, el objeto, `obj`, después de la ejecución, tendrá las siguientes propiedades:
`obj = {prop1: "valor1", prop2: "valor2", XXX: "YYY", zz: "hh"}` 


Hazlo en el fichero `extiendeObjetos.js`, dentro de la función `extiendeObjetos` que ya está definida en ese archivo. Tienes que añadirle los parámetros que necesite y el código.

No elimines ni modifiques esta línea, ya que es necesaria para los tests `module.exports = extiendeObjetos;`

### 3. - indiceIgualValor
Crea una función que recibe como parámetro un array de números y que devuelva un booleano que indique si alguno de los valores del array, coindice con la posición del array en la que aparece. 

Es decir, `indiceIgualValor([3,5,2,9,4])` devolverá true porque en el índice 2, tenemos un 2. 
Pero por ejemplo, `indiceIgualValor([7,3,6,4])` devolverá falso, ya que ningún indice coincide con el valor almacenado en esa posición.

Hazlo en el fichero `indiceIgualValor.js`, dentro de la función `indiceIgualValor` que ya está definida en ese archivo. Tienes que añadirle los parámetros que necesite y el código.

No elimines ni modifiques esta línea, ya que es necesaria para los tests `module.exports = indiceIgualValor;`

### 4. - cadenaMasLarga
Crea una función que recibe como parámetro un array de cadenas y que devuelva aquella cadena que tiene más carácteres. Si hay más de una cadena con el mismo número de carácteres que la que más tiene, se devolverá la que aparezca última en el array.

Es decir, `cadenaMasLarga(["hola", "anastasia", "como", "estas"])` devolverá `"anastasia"`, y  `cadenaMasLarga(["a", "bb", "c", "dd"])` devolverá `"dd"`.

Hazlo en el fichero `cadenaMasLarga.js`, dentro de la función `cadenaMasLarga` que ya está definida en ese archivo. Tienes que añadirle los parámetros que necesite y el código.

No elimines ni modifiques esta línea, ya que es necesaria para los tests `module.exports = cadenaMasLarga;`


### 5. - sumaParesImpares
Crea una función que recibe como parámetro un array de números y que devuelva un objetos con dos propiedades, una llamada "pares", que contendra la suma de los números pares del array, y otra llamada "impares", que contendrá la suma de los números impares del array. 

Es decir, `sumaParesImpares([1,2,3,4,5,6,7,8,9])` devolverá `{pares: 20, impares: 25}`.

Hazlo en el fichero `sumaParesImpares.js`, dentro de la función `sumaParesImpares` que ya está definida en ese archivo. Tienes que añadirle los parámetros que necesite y el código.

No elimines ni modifiques esta línea, ya que es necesaria para los tests `module.exports = sumaParesImpares;`

### 6. - eliminaDuplicados
Crea una función que recibe como parámetro un array de números y que devuelva otro array en el que haya un valor por cada valor distinto que hubiera en el array de entrada y en el que no haya valores duplicados. 

Es decir, `eliminaDuplicados([1,4,3,4,5,4,4,2,5])` devolverá `[1,4,3,5,2]`.
Es decir, `eliminaDuplicados([1,2,3])` devolverá `[1,2,3]`.

### 7. - mediaSumaMaxMin
Crea una función que recibe como parámetro un array de números y que devuelva un objeto que contenga: 
* una propiedad `suma` cuyo valor será la suma de todos los numeros del array
* una propiedad `max` cuyo valor sera el número más grande del array de entrada
* una propiedad `min` cuyo valor será el número más pequeño del array de entrada
* una propiedad `media` cuyo valor será la media de todos los números del array.

Es decir, `mediaSumaMaxMin([1,2,3,4,5])` devolverá `{suma: 15, max: 5, min: 1, media: 3}`.

Intenta hacerlo con reduce 😏😏
