const Tablero = require('../js/tablero');

describe('Pruebas de la clase Cell', () => {
  test('probamos el estado random', () => {
    const tablero = new Tablero(5, 5);
    const numeroRandom = tablero.randomState();
    expect([0, 1]).toContain(numeroRandom);
  });
  test('Pruebas de contador', () => {
    const tablero = new Tablero(2, 2);
    const contador = tablero.contador(1, 1);
    expect([0, 1]).toContain(contador);
  });
  test('Pruebas de las reglas de vida', () => {
    const tablero = new Tablero(5, 5);
    expect(tablero.cambiosEstado(2, 1, 1, 1)).toBe(1);
    expect(tablero.cambiosEstado(3, 1, 1, 1)).toBe(1);
    expect(tablero.cambiosEstado(4, 1, 1, 1)).toBe(0);
    expect(tablero.cambiosEstado(1, 1, 1, 1)).toBe(0);
    expect(tablero.cambiosEstado(3, 1, 1, 0)).toBe(1);
  });
  test('Pruebas de recorrer tablero', () => {
    const tablero = new Tablero(2, 2);
    expect(tablero.recorrerTablero()).toBe(4);
  });
  test('Pruebas de recorrer tablero', () => {
    const tablero = new Tablero(2, 2);
    expect(tablero.getTablero()).toBeUndefined();
  });
});
