const invierteArrays = require('./invierteArrays');

describe('Tests para invierteArrays, los calcula correctamente en:', () => {
  it('[1,2,10,4,5,6,7,6,45,3,4,5,6,6,87,9,9,7,6,5,3,3,2,23,4,5,6,7,8,6]', () => {
    const resultado = invierteArrays([1,2,10,4,5,6,7,6,45,3,4,5,6,6,87,9,9,7,6,5,3,3,2,23,4,5,6,7,8,6]);
    expect(resultado).toBe([1,2,10,4,5,6,7,6,45,3,4,5,6,6,87,9,9,7,6,5,3,3,2,23,4,5,6,7,8,6].reverse());
  });
});
