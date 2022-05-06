const Celula = require('./celula');

class Tablero {
  constructor(filas, columnas) {
    this.filas = filas;
    this.columnas = columnas;
    this.estructura = new Array(filas)
      .fill(new Array(columnas).fill(0))
      // eslint-disable-next-line no-shadow
      .map((filas, i) => filas.map((_columnas, k) => new Celula(this.randomState(), i, k, 0, 0)));
  }

  // Metodo de clase que genera un estado de la celula aleatoriamente (0 => muerto , 1 => vivo)
  // eslint-disable-next-line class-methods-use-this
  randomState() {
    const numeroRandom = Math.random();
    if (numeroRandom > 0.9) {
      return 1;
    }
    return 0;
  }

  // Metodo de la clase que muestra el tablero por consola
  getTablero() {
    console.clear();
    this.estructura.forEach((fila) =>
      console.log(fila.map((columna) => (columna.getState() ? '*' : '.')).join('')));
    this.recorrerTablero();
  }

  recorrerTablero() {
    let cont = 0;
    for (let i = 0; i < this.columnas; i += 1) {
      for (let j = 0; j < this.filas; j += 1) {
        cont += 1;
        const vivas = this.contador(i, j);
        this.cambiosEstado(vivas, i, j, this.estructura[j][i].state);
      }
    }
    return cont;
  }

  contador(x, y) {
    const moveX = [0, 0, 1, -1, -1, -1, 1, 1];
    const moveY = [1, -1, 0, 0, 1, -1, -1, 1];
    let cnt = 0;
    for (let i = 0; i < 8; i += 1) {
      const mox = x + moveX[i];
      const moy = y + moveY[i];
      if (
        !(mox < 0 || moy < 0 || mox > this.filas - 1 || moy > this.columnas - 1)
      ) {
        const celulaState = this.estructura[mox][moy];
        if (celulaState.state === 1) {
          cnt += 1;
        }
      }
    }
    return cnt;
  }

  cambiosEstado(cantVecinos, posX, posY, estado) {
    let nuevoEstado;
    if (estado === 1) {
      if (cantVecinos === 3 || cantVecinos === 2) {
        this.estructura[posX][posY].estado = 1;
        nuevoEstado = 1;
      } else {
        this.estructura[posX][posY].estado = 0;
        nuevoEstado = 0;
      }
    } else if (cantVecinos === 3) {
      this.estructura[posX][posY].estado = 1;
      nuevoEstado = 1;
    }
    return nuevoEstado;
  }
}

module.exports = Tablero;
