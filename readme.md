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

### 7. - sumaRestaArrays
Crea una función que recibe como parámetro dos arrays de números y un string que indica la operación. Si el string es "suma", devolverá un array con la suma de los numeros de los arrays recibidos como parámetro, si el string es "resta", devolverá un array con la resta de los números de los arrays recibidos como parámetro.

Es decir, `sumaRestaArrays([5,6,4,3], [1,1,2,2], "suma")` devolverá `[6,7,6,5]`.
Es decir, `sumaRestaArrays([5,6,4,3], [1,1,2,2], "resta")` devolverá `[4,5,2,1]`.

### 8. - adivinaLosLogs
Mira el código del fichero "adivinaLosLogs.js" y antes de ejecutarlo, intenta adivinar que verás en la consola para cada uno de los puntos.

Y si al ejecutarlo no te coincide, tienes que desatraparte y entender por qué. 
**Este ejercicio no tiene tests.**

### 9. - Animal.js
Crea una clase "Animal" que cree objetos que tengan los siguientes métodos:
* `getName()` - devuelve el nombre del animal
* `getAge()` - devuelve la edad del animal

Tanto la edad como el nombre, se pasarán al constructor de la clase "Animal".

Es decir:
```
  const Lara = new Animal("Lara", "3");
  console.log('el nombre es:', Lara.getName());
  console.log('la edad es:', Lara.getAge());
```
Deberia de imprimir :
```
el nombre es: Lara
la edad es: 3
```

Crea la clase en el fichero `Animal.js`, y expórtala para que pasen los tests.

### 10. - Loro.js & Lobo.js
Crea una clase "Loro" que cree objetos que tengan los siguientes métodos:
* `getName()` - devuelve el nombre del animal
* `getAge()` - devuelve la edad del animal
* `fly()` - devuelve una cadena que contenga "flap flap mira como vuelo"


Crea una clase "Lobo" que cree objetos que tengan los siguientes métodos:
* `getName()` - devuelve el nombre del animal
* `getAge()` - devuelve la edad del animal
* `howl()` - devuelve una cadena que contenga "aaauuuuuuuuuuuuuuuuuuuuu"

Los métodos getName() y getAge() son iguales que los que implementaste en la clase animal,
así que en vez de repetirlos, haz que las clases Loro y Lobo hereden de la clase animal.

Es decir:
```
  const Lara = new Loro("Lara", "3");
  console.log('el nombre es:', Lara.getName());
  console.log('la edad es:', Lara.getAge());
  console.log('el ruido que hace al volar es:', Lara.fly());
```
Deberia de imprimir :
```
el nombre es: Lara
la edad es: 3
el ruido que hace al volar es: flap flap mira como vuelo
```

Si intentamos hacer Lara.howl(), recibiremos un error, ya que los loros no aullan.

Por otro lado podremos crear un objeto Lobo:
```
  const LaLoba = new Loro("LaLoba", "5");
  console.log('el nombre es:', LaLoba.getName());
  console.log('la edad es:', LaLoba.getAge());
  console.log('el ruido que hace al aullar es:', LaLoba.howl());
```
Deberia de imprimir :
```
el nombre es: Lara
la edad es: 3
el ruido que hace al aullar es: aaauuuuuuuuuuuuuuuuuuuuu
```

Si intentamos hacer LaLoba.fly(), recibiremos un error, ya que los lobos no vuelan.

Crea la clase en los ficheros `Loro.js` y `Lobo.js`, y expórtalas para que pasen los tests.

### 11. - invierteArrays
Crea una funcion que invierta el orden de los elementos de un array **sin utilizar la funcion predefinida .reverse()**.

Es decir:
```
  console.log(invierteArrays([1,2,3,4,5,6,7]));
```
Deberia de imprimir :
```
[7,6,5,4,3,2,1]
```

Crea la clase en los ficheros `invierteArrays.js`, y expórtalas para que pasen los tests.

### 12. - juego abecedario
Termina el javascript en el fichero juego.html para que al abrirlo con un navegador, 
te muestre el tiempo que pasa desde que pulsas el boton reset hasta que escribes todo el abecedario.

Da igual aunque no entiendas todo el javascript, la funcion que tienes que escribir es `abecedarioEstaCompleto`,
que como veras esta vacia en el html.

Cuando lo hayas completado y funcione ,que es facil, intenta entender el resto del codigo.

Por cierto, que sepas que mi record es *"Muy bien! has tardado **5.606** segundos"*

### 13. - doubleIndex
Crea una funcion que recibe un array y un índice y devuelva el elemento resultando de indexar el array con el valor resultante de indexarlo con el parámetro.

Es decir:
```
  console.log(doubleIndex([5,4,2,6,9,8,7,1,2,3], 5));
```
Deberia de imprimir : `2`.

Ya que al indexar el array con el numero 5, obtenemos el 8, y al indexar el array con el 8, obtenemos el dos. 
(indexar un array con un numero es acceder al elemento del array que se encuentra en la posición que marca el número)

Crea la funcion en el fichero `doubleIndex.js`, y expórtalas para que pasen los tests.

### 13. - buscaIndices
Crea una funcion que recibe un array y un valor, y devuelva un nuevo array con los índices en los que se encuentra ese valor.

Es decir:
```
  console.log(buscaIndices([5,4,2,6,9,8,7,1,2,3], 2));
```
Deberia de imprimir : `[2,8]`.

Crea la funcion en el fichero `buscaIndices.js`, y expórtalas para que pasen los tests.