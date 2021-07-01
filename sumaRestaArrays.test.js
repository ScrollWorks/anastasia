const sumaRestaArrays = require('./sumaRestaArrays');

describe('Tests para sumaRestaArrays', () => {
  it('Para los arrays [1,2,3,4] y [5,6,7,8], con "suma"', () => {
    const resultado = sumaRestaArrays([1,2,3,4], [5,6,7,8], "suma");
    expect(JSON.stringify(resultado)).toBe(JSON.stringify([6,8,10,12]));
  });
  it('Para los arrays [1,2,3,4] y [5,6,7,8], con "resta"', () => {
    const resultado = sumaRestaArrays([1,2,3,4], [5,6,7,8], "resta");
    expect(JSON.stringify(resultado)).toBe(JSON.stringify([-4,-4,-4,-4]));
  });
});
