const Tablero = require('./tablero');

const inicializaTablero = (filaString, columnasString) => {
  const fila = parseInt(filaString, 10);
  const columna = parseInt(columnasString, 10);
  const tabla = new Tablero(fila, columna);
  setInterval(() => {
    tabla.getTablero();
  }, 1000);
};

inicializaTablero(process.argv[2], process.argv[3]);
