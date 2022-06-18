const calculator = {
  read(){
    this.a = Number(prompt('Введите А', 0));
    this.b = Number(prompt('Введите B', 0));
  },

  sum(){
    return this.a + this.b;
  },

  mul(){
    return this.a * this.b;
  }
};

const ladder = {
  step: 0,

  up(){
    this.step++;
    return this;
  },

  down(){
    this.step--;
    return this;
  },
  
  showStep(){
    alert( this.step );
    return this;
  }
};