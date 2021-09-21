const buscaIndices = require('./buscaIndices');

describe('Tests para buscaIndices, devuelve bien los indices:', () => {
  it('[5,4,2,6,9,8,7,1,2,3], 2', () => {
    const resultado = buscaIndices([5,4,2,6,9,8,7,1,2,3], 2);
    expect(resultado).toStrictEqual([2,8]);
  });
  it('[1,5,6,9,8,7,4,5,6,3,2,5,6,9,8,7,1,2,5,6,3,9,8], 8', () => {
    const resultado = buscaIndices([1,5,6,9,8,7,4,5,6,3,2,5,6,9,8,7,1,2,5,6,3,9,8], 8);
    expect(resultado).toStrictEqual([4,14,22]);
  });  
});
