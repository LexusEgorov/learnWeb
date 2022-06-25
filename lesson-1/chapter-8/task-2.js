Function.prototype.defer = function(ms){
  setTimeout(this, ms);
}

Function.prototype.defer = function(ms){
  const cb = this;
  function wrapper(...rest){
    setTimeout(() => {
      cb.apply(this, rest);
    }, ms);
  }
}