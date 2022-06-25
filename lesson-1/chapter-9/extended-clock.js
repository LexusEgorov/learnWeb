import Clock from './clock';

class ExtendedClock extends Clock{
  #precision = null;

  constructor(precision = 1000){
    super();
    this.#precision = precision;
  }

  start(){
    this._render();
    this._timer = setInterval(this.#render, this.#precision);
  }
}