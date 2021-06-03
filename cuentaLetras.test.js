const cuentaLetras = require('./cuentaLetras');

describe('Tests para cuentaLetras, cuenta bien para la frase:', () => {
  it('Hola Anastasia como estas hoy', () => {
    const resultado = cuentaLetras('Hola Anastasia como estas hoy');
    expect(resultado.H).toBe(1);
    expect(resultado.o).toBe(4);
    expect(resultado.l).toBe(1);
    expect(resultado.a).toBe(5);
    expect(resultado.A).toBe(1);
    expect(resultado.n).toBe(1);
    expect(resultado.s).toBe(4);
    expect(resultado.t).toBe(2);
    expect(resultado.i).toBe(1);
    expect(resultado.c).toBe(1);
    expect(resultado.m).toBe(1);
    expect(resultado.e).toBe(1);
    expect(resultado.h).toBe(1);
    expect(resultado.y).toBe(1);
  });

  it('yo soy Rubencito y estoy de maravilla', () => {
    const resultado = cuentaLetras('yo soy Rubencito y estoy de maravilla');
    expect(resultado.y).toBe(4);
    expect(resultado.o).toBe(4);
    expect(resultado.s).toBe(2);
    expect(resultado.R).toBe(1);
    expect(resultado.u).toBe(1);
    expect(resultado.b).toBe(1);
    expect(resultado.e).toBe(3);
    expect(resultado.n).toBe(1);
    expect(resultado.c).toBe(1);
    expect(resultado.i).toBe(2);
    expect(resultado.t).toBe(2);
    expect(resultado.d).toBe(1);
    expect(resultado.m).toBe(1);
    expect(resultado.a).toBe(3);
    expect(resultado.r).toBe(1);
    expect(resultado.v).toBe(1);
    expect(resultado.l).toBe(2);
  });  
});
