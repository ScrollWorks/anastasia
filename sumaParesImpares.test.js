const sumaParesImpares = require('./sumaParesImpares');

describe('Tests para sumaParesImpares, devuelve el objeto correcto para:', () => {
  it('[1,2,3,4,5,6,7,8,9]', () => {
    const resultado = sumaParesImpares([1,2,3,4,5,6,7,8,9]);
    expect(resultado).toMatchObject({
      pares: 20,
      impares: 25
    });
  });

  it('[11,22,33,44,55,66,77,88,99]', () => {
    const resultado = sumaParesImpares([11,22,33,44,55,66,77,88,99]);
    expect(resultado).toMatchObject({
      pares: 220,
      impares: 275
    });
  });  

});
