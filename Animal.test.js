const Animal = require('./Animal');

describe('Tests para la clase Animal', () => {
  it('Crea bien los objetos y devuelve el nombre en el metodo getName', () => {
    const marcelino = new Animal("Marcelino", 4);
    expect(marcelino.getName()).toBe("Marcelino");
  });
  it('Crea bien los objetos y devuelve el nombre en el metodo getName', () => {
    const pantuflo = new Animal("Pantuflo", 2);
    expect(pantuflo.getAge()).toBe(2);
  });
});
