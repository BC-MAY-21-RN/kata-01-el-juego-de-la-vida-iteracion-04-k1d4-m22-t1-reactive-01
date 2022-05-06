const Celula = require('../js/celula');

const celula = new Celula(1, 3, 4, 5, 8);
describe('Pruebas de la clase Cell', () => {
  test('metodo para obtener el estado de la celula', () => {
    expect(celula.getState()).toBe(1);
  });
  test('metodo para obtener la posicion de la celula', () => {
    expect(celula.getPositionX()).toBe(3);
    expect(celula.getPositionY()).toBe(4);
  });
});
