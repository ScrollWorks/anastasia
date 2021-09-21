const doubleIndex = require('./doubleIndex');

describe('Tests para doubleIndex, devuelve bien el elemento:', () => {
  it('[9,8,7,6,5,4,3,2,1], 7', () => {
    const resultado = doubleIndex([9,8,7,6,5,4,3,2,1], 7);
    expect(resultado).toBe(7);
  });
  it('[5,4,2,6,9,8,7,1,2,3], 5', () => {
    const resultado = doubleIndex([5,4,2,6,9,8,7,1,2,3], 5);
    expect(resultado).toBe(2);
  });  
});
