// PUNTO 1
const rubencito = {
  edad: 32,
  mascota: "Lara",
  belleza: "casi infinita",
  inteligencia: "infinita",
  modestia: "nula",
};

console.log('LOG 1-1', rubencito.belleza);

const propiedad = "mascota";
console.log('LOG 1-2', rubencito[propiedad]);

const { modestia } = rubencito;
console.log('LOG 1-3', modestia);

const { edad: incognita } = rubencito;
console.log('LOG 1-4', incognita);

console.log('LOG 1-5', { incognita, modestia });
console.log('=============================');

// PUNTO 2
console.log('LOGS DEL PUNTO 2: ')

//no hace falta que entiendas el código de esta funcion de abajo
//simplemente saber que tarda dos segundos y luego escribe HOLA"
const escribeHolaDespuesDe2Segundos = () => new Promise(res => {
    setTimeout(res, 2000);
  }).then(() => console.log('HOLA!'));

function saludame() {
  console.log('Hey!');
  escribeHolaDespuesDe2Segundos();
  console.log('¿cómo estás?')
}

//Que saldra por la consola al ejecutar saludame?
saludame();

//¿¿Por qué?? Que habria que cambiar para que imprimiera:
//   Hey!
//   HOLA!
//   ¿cómo estás?
//
