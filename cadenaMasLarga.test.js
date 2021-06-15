const cadenaMasLarga = require('./cadenaMasLarga');

describe('Tests para cadenaMasLarga, devuelve la cadena correcta para:', () => {
  it('["hola", "anastasia", "como", "estas"]', () => {
    const resultado = cadenaMasLarga(["hola", "anastasia", "como", "estas"]);
    expect(resultado).toBe("anastasia");
  });

  it('["a", "bb", "ccc", "dd", "eee", "ff", "g"]', () => {
    const resultado = cadenaMasLarga(["a", "bb", "ccc", "dd", "eee", "ff", "g"]);
    expect(resultado).toBe("eee");
  });  

});
