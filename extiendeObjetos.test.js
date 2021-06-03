const extiendeObjeto = require('./extiendeObjetos');

describe('Tests para extiendeObjetos, añade bien las propiedades:', () => {
  it('nombre ruben, valor Lara y nombre a, valor b', () => {
    const objeto = {
      prop1: 'valor1',
      prop2: 'valor2'
    }
    extiendeObjeto(objeto, [{nombre: 'ruben', valor: 'Lara'}, {nombre: 'a', valor: 'b'}]);
    expect(objeto).toMatchObject({
      prop1: 'valor1',
      prop2: 'valor2',
      ruben: 'Lara',
      a: 'b'
    });
  });
});
