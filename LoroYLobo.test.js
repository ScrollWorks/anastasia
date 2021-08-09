const Loro = require('./Loro');
const Lobo = require('./Lobo');

describe('Tests para la clase Loro', () => {
  const Lara = new Loro("Lara", 3);
  it('devuelve el nombre en el metodo getName', () => {
    expect(Lara.getName()).toBe("Lara");
  });
  it('devuelve el nombre en el metodo getName', () => {
    expect(Lara.getAge()).toBe(3);
  });
  it('devuelve el ruido de volar', () => {
    expect(Lara.fly()).toBe("flap flap mira como vuelo");
  });
  it('no puede aullar', () => {
    expect(() => Lara.howl()).toThrow();
  });
});


describe('Tests para la clase Lobo', () => {
  const Lobecita = new Lobo("Lobecita", 6);
  it('devuelve el nombre en el metodo getName', () => {
    expect(Lobecita.getName()).toBe("Lobecita");
  });
  it('devuelve el nombre en el metodo getName', () => {
    expect(Lobecita.getAge()).toBe(6);
  });
  it('devuelve el ruido de aullar', () => {
    expect(Lobecita.howl()).toBe("aaauuuuuuuuuuuuuuuuuuuuu");
  });
  it('no puede volar', () => {
    expect(() => Lobecita.fly()).toThrow();
  });
});
