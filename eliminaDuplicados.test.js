const eliminaDuplicados = require('./eliminaDuplicados');

describe('Tests para eliminaDuplicados, los elimina correctamente de:', () => {
  it('[1,2,3,4,5,6,7,6,45,3,4,5,6,6,87,9,9,7,6,5,3,3,2,23,4,5,6,7,8,6]', () => {
    const resultado = eliminaDuplicados([1,2,3,4,5,6,7,6,45,3,4,5,6,6,87,9,9,7,6,5,3,3,2,23,4,5,6,7,8,6]);
    resultado.forEach((element, index) => {
      expect(resultado.indexOf(element)).toBe(index);
    });
  });
});
