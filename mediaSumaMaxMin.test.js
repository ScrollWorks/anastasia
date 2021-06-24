const mediaSumaMaxMin = require('./mediaSumaMaxMin');

describe('Tests para mediaSumaMaxMin, los calcula correctamente en:', () => {
  it('[1,2,10,4,5,6,7,6,45,3,4,5,6,6,87,9,9,7,6,5,3,3,2,23,4,5,6,7,8,6]', () => {
    const resultado = mediaSumaMaxMin([1,2,10,4,5,6,7,6,45,3,4,5,6,6,87,9,9,7,6,5,3,3,2,23,4,5,6,7,8,6]);
    expect(resultado.media).toBe(10);
    expect(resultado.suma).toBe(300);
    expect(resultado.max).toBe(87);
    expect(resultado.min).toBe(1);
  });
});
