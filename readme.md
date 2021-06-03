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

