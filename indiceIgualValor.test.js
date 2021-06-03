const indiceIgualValor = require('./indiceIgualValor');

describe('Tests para indiceIgualValor, devuelve booleano correcto:', () => {
  it('para el array [4,5,2,6,4,6,2]', () => {
    const array = [4,5,2,6,4,6,2];
    expect(indiceIgualValor(array)).toBe(true);
  });
  it('para el array [1,2,3,4,5,6,7]', () => {
    const array =  [1,2,3,4,5,6,7];
    expect(indiceIgualValor(array)).toBe(false);
  });
});
