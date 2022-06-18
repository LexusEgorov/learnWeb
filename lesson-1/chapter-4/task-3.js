//1
const a = {};

function A() { return a }
function B() { return a }

//2
function Calculator() {
  this.read = function(){
    this.a = Number(prompt('Введите А', 0));
    this.b = Number(prompt('Введите B', 0));
  },

  this.sum = function(){
    return this.a + this.b;
  },

  this.mul = function(){
    return this.a * this.b;
  }
}

//3
function Accumulator(startingValue) {
  this.value = startingValue;
  
  this.read = function(){
    this.value += Number(prompt('Введите число', 0));
  }
}
