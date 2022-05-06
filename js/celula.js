class Celula {
  constructor(estado, xPosition, yPosition, limites, cantVecinos) {
    this.estado = estado;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.limites = limites;
    this.cantVecinos = cantVecinos;
  }

  // Metodo de la clase que muestra el valor del estado de la celula
  getState() {
    return this.estado;
  }

  get state() {
    return this.getState();
  }

  // Metodo de la clase que modifica el estado de la celula
  setState(newState) {
    this.estado = newState;
  }

  // Metodo de la clase que muestra la posicion en X e Y de la celula
  getPositionX() {
    return this.xPosition;
    // console.log(`[ ${this.xPosition} , ${this.yPosition} ]`);
  }

  getPositionY() {
    return this.yPosition;
    // console.log(`[ ${this.xPosition} , ${this.yPosition} ]`);
  }

  // Metodo de la clase que muestra los limites de la celula
  getLimits() {
    return this.limites;
  }
}

module.exports = Celula;
